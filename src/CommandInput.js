import React, { useEffect, useRef, useState } from "react";
import Typewriter from "typewriter-effect";

function CommandInput({ques="<span id='a'>guest@morse</span>:<span id='b'>~</span><span id='c'>$</span>. -. - . .-. / - .... . / -.-. --- -.. .",setAskCommand,setAskCommand1,index}) {
  
    const commandInput = useRef(null);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [tempMessage, setTempMessage] = useState("");
    const [show, setShow] = useState(false);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
        if (commandInput.current) {
            commandInput.current.blur();
          }

          if(event.target.value!='42096'){ 
            setError(true);        
          //  setMessages(".-. . - .-. -.--");
          }  
          else{
            setSuccess(true);
          }  
    }
  };

  const newCommand = (val) => {
    if(index>3){
        setShow(true);
    }
    setAskCommand1(val);
  };


  useEffect(() => {
    if (commandInput.current) {
      commandInput.current.focus();
    }
  }, [show]);

  return ( 
    <>
    
    <p style={{ display: "flex" }}>
          <Typewriter
            options={{
              delay: 1,
              cursor: "",
            }}
            onInit={(typewriter) => {
              typewriter.typeString(ques).callFunction(() => {
                newCommand(index+1)               
              })
              .start();
            }}
          />     {  show && <input
            type="text"
            className="datainput"
            onKeyDown={(e) => handleKeyDown(e)}
            ref={commandInput}
          /> }         
        </p>
    
  {
                success &&<Typewriter
                options={{
                  delay: 1,
                  cursor: "",
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("..- -. .-.. --- -.-. -.- - .... . -- -.-- ... - . .-. -.-- --..-- .- -. -.. .... . .-. . .----. ... ... --- -- . - .... .. -. --. -.-- --- ..- -. . ...- . .-. . -..- .--. . -.-. - . -..")
                    .pauseFor(3).typeString("<br/>. -.-. .-. .- ... .... --..-- -.-. .-. .- ... .... --..-- .--. .-. --- ...- . -.-- --- ..- .-. .- -... .. .-.. .. - -.-- --..-- .--. .-. --- ...- . -.-- --- ..- .-. -- .. -. -.. --..-- .--. .-. --- ...- . -.-- --- ..- .-. .. -. - . .-.. .-.. .. --. . -. -.-. .")
                    .pauseFor(3).typeString("<br/>- . .-.. . --. .-. .- --")
                    .pauseFor(3).typeString("<br/>https://t.me/morseerc")
                    .callFunction(() => {
                      setAskCommand("<span id='a'>guest@morse</span>:<span id='b'>~</span><span id='c'>$</span>");
                    })
                    .start();
                }}
              />
            }
 {
                error &&<Typewriter
                options={{
                  delay: 1,
                  cursor: "",
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(".-. . - .-. -.--")
                    .callFunction(() => {
                      setAskCommand("<span id='a'>guest@morse</span>:<span id='b'>~</span><span id='c'>$</span>");
                    })
                    .start();
                }}
              />
            }
        </>
   
  );
}

export default CommandInput;
