import React, { useEffect, useRef, useState } from "react";
import Typewriter from "typewriter-effect";

function CommandInput({ques="<span id='a'>guest@morse</span>:<span id='b'>~</span><span id='c'>$</span>. -. - . .-. / - .... . / -.-. --- -.. .",setAskCommand,setAskCommand1,index}) {
  
    const commandInput = useRef(null);
    const [messages, setMessages] = useState('');
    const [tempMessage, setTempMessage] = useState("");
    const [show, setShow] = useState(false);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
        if (commandInput.current) {
            commandInput.current.blur();
          }

          if(event.target.value!='42096'){         
            setMessages(".-. . - .-. -.--");
          }    
    }
  };

  const newCommand = (val) => {
    if(index>2){
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
          />         
        </p>
        {  show && <input
              type="text"
              className="datainput"
              onKeyDown={(e) => handleKeyDown(e)}
              ref={commandInput}
            /> } 

            {
                messages!='' &&<Typewriter
                options={{
                  delay: 1,
                  cursor: "",
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(messages)
                    .callFunction(() => {
                      setAskCommand("<span id='a'>guest@morse</span>:<span id='b'>~</span><span id='c'>$</span>. -. - . .-. / - .... . / -.-. --- -.. .");
                    })
                    .start();
                }}
              />
            }

        </>
   
  );
}

export default CommandInput;
