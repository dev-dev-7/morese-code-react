import React, { useEffect, useRef, useState } from "react";
import Typewriter from "typewriter-effect";
function CommandInput({setAskCommand,index}) {
    const commandInput = useRef(null);
    const [messages, setMessages] = useState([]);
    const [tempMessage, setTempMessage] = useState("");
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
        if (commandInput.current) {
            commandInput.current.blur();
          }
      messages.push({
        key: event.target.value,
        message: "Command not found. Type 'help' to see list of commands.",
      });
      let updated = messages;
      setMessages(updated);
      setTempMessage("Command not found. Type 'help' to see list of commands.");
    }
  };



  useEffect(() => {
    if (commandInput.current) {
      commandInput.current.focus();
    }
  }, []);

  return ( 
    <>
    
    <p style={{ display: "flex" }}>
          <Typewriter
            options={{
              delay: 1,
              cursor: "",
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "<span id='a'>guest@morse</span>:<span id='b'>~</span><span id='c'>$</span>"
                )
                .callFunction(() => {
                  console.log("All strings were deleted");
                })
                .start();
            }}
          />
            <input
              type="text"
              class="datainput"
              onKeyDown={(e) => handleKeyDown(e)}
              ref={commandInput}
            />
     
        </p>
    {messages &&
        messages.map((messages, index) => (
          <>         
            <Typewriter
              options={{
                delay: 1,
                cursor: "",
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(messages.message)
                  .callFunction(() => {
                    setAskCommand(index+1);
                  })
                  .start();
              }}
            />
          </>
        ))}</>
   
  );
}

export default CommandInput;
