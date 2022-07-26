import React, { useEffect, useRef, useState } from "react";
import Typewriter from "typewriter-effect";
import telegram from './images/telegram.svg';
import twitter from './images/twitter.svg';
import CommandInput from "./CommandInput";
import CommandList from "./CommandList";
function App() {
  const [askCommand, setAskCommandd] = useState([]);
  const [quesList, setQuesList] = useState([
  ".- .-.. .-.. ... . -.-. .-. . - ... -- ..- ... - -. --- - -... . --- -... ...- .. --- ..- ... --..-- --- .-. - .... . -.-- .-.. --- ... . - .... . .. .-. ...- .- .-.. ..- .",
  " - .... .-. . . .- .-. .-. --- .-- ... -.-. .- .--. .. - .- .-.. -.. ..- . - --- - .... . .. .-. .-.. --- ... ... --- ..-. -.-. --- -. ..-. .. -.. . -.",
  "-.-. . .- -. -.. .- -... .. .-.. .. - -.-- - --- -.. .. ... .- .--. .--. . .- .-. ..-. --- .-. .... --- .-- .-.. --- -. --.",
  ". -. - . .-. / - .... . / -.-. --- -.. .",
  "<span id='a'>guest@morse</span>:<span id='b'>~</span><span id='c'>$</span>"]);
const [cmd, setCmd] = useState([]);

const setAskCommand1 = (val) => {  
 if(val<5){
  setAskCommandd([...askCommand, quesList[val]]);
 }
 };

  const setAskCommand = (val) => {    
   setAskCommandd([...askCommand, val]);    
  };

  return (
    <>
    <h1  className='socialmedia'>
        <a
                target="_blank"
                href="https://twitter.com/morseerc"
                style={{ marginRight: '40%'}}> <img src={twitter} /> </a>
    
   
    <a
                target="_blank"
                href="https://t.me/morseerc"
              > <img src={telegram} />  
                </a>
    </h1>
 
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
              ""
            )
            .callFunction(() => {          
            setAskCommandd([...askCommand, quesList[0]]);     
            })
            .start();
        }}
      />
      {/* {cmd.length>0 && cmd?.map((command, i) => ( <CommandList command={command} setAskCommand1={setAskCommand1} key={i} index={i}/>))} */}
        {askCommand.length>0 && askCommand?.map((ques, i) => ( <CommandInput ques={ques}  setAskCommand1={setAskCommand1} setAskCommand={setAskCommand} index={i}  key={i}/>))} 


    </div>  </>
  );
}

export default App;
