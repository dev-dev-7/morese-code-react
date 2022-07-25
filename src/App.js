import React, { useEffect, useRef, useState } from "react";
import Typewriter from 'typewriter-effect';
function App() {
  const commandInput = useRef(null);
  const [show, setShow] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [askCommand, setAskCommand] = useState(false);
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setNotFound(true);
    }
  }

  useEffect(() => {
    if (commandInput.current) {
      commandInput.current.focus();
    }
  }, [show]);
  return (    
    <div id="console">
    <h1 className="glitch">Fvck F!AT</h1>
    <h2 id="timer">Go to mint.fvckfiat.com</h2>
    <Typewriter
     options={{
      delay:1, cursor:''
    }}
      onInit={(typewriter) => {
      typewriter.typeString("<span id='consoleText'>Welcome! Type 'help' to see list of commands. </span>")
      .callFunction(() => {
        setShow(true);
      })      
      .start();
  }}
/> 
{show&&<p style={{display:'flex'}}>
  <Typewriter
     options={{
      delay:1, cursor:''
    }}
      onInit={(typewriter) => {
        typewriter.typeString("<span id='a'>guest@fvckfiat.com</span>:<span id='b'>~</span><span id='c'>$</span>")     
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
  }}
/> 
<span class='cursor'><input type='text' class='datainput' onKeyDown={handleKeyDown} ref={commandInput}  /><i></i></span> </p> } 

{notFound && <> <Typewriter
     options={{
      delay:1, cursor:''
    }}
      onInit={(typewriter) => {
      typewriter.typeString("Command not found. Type 'help' to see list of commands.")
      .callFunction(() => {
        setAskCommand(true);
      })      
      .start();
  }}
/>
{askCommand&&<p style={{display:'flex'}}>
  <Typewriter
     options={{ 
      delay:1, cursor:''
    }}
      onInit={(typewriter) => {
        typewriter.typeString("<span id='a'>guest@fvckfiat.com</span>:<span id='b'>~</span><span id='c'>$</span>")     
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
  }}
/> 
<span class='cursor'><input type='text' class='datainput' onKeyDown={handleKeyDown} ref={commandInput}  /><i></i></span> </p> }
</>
}

</div>
      
     
  );
}

export default App;
