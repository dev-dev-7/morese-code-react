import React, { useEffect, useRef, useState } from "react";
import Typewriter from "typewriter-effect";
import CommandInput from "./CommandInput";
function App() {
  const [askCommand, setAskCommandd] = useState([]);

  const setAskCommand = (val) => {    
   setAskCommandd([...askCommand, val]);
    
  };
  return (
    <div id="console">
      <h1 className="glitch">Morse code !!!</h1>
      <Typewriter
        options={{
          delay: 1,
          cursor: "",
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString(
              "<span id='consoleText'>Welcome! Type 'help' to see list of commands. </span>"
            )
            .callFunction(() => {
              setAskCommandd([...askCommand, 0]);
            })
            .start();
        }}
      />
      {askCommand.length>0 && askCommand?.map((card, i) => ( <CommandInput setAskCommand={setAskCommand} index={i}/>))}


    </div>
  );
}

export default App;
