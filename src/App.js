import React, { useEffect, useRef, useState } from "react";
import Typewriter from "typewriter-effect";
function App() {
  const commandInput = useRef(null);
  const [show, setShow] = useState(false);
  const [askCommand, setAskCommand] = useState(false);
  const [messages, setMessages] = useState([]);
  const [tempMessage, setTempMessage] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
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
  }, [show]);

  console.log("messages: ", messages);

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
              setShow(true);
            })
            .start();
        }}
      />
      {messages &&
        messages.map((messages, index) => (
          <>
            <p style={{ display: "flex" }} key={index}>
              <Typewriter
                options={{
                  delay: 1,
                  cursor: "",
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      "<span id='a'>guest@morseeee</span>:<span id='b'>~</span><span id='c'>$</span>"
                    )
                    .callFunction(() => {
                      console.log("All strings were deleted");
                    })
                    .start();
                }}
              />
              <span>
                {messages.key}
                <i></i>
              </span>{" "}
            </p>
            <Typewriter
              options={{
                delay: 1,
                cursor: "",
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(messages.message)
                  .callFunction(() => {
                    setAskCommand(true);
                  })
                  .start();
              }}
            />
          </>
        ))}

      {show && (
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
          <span class="cursor">
            <input
              type="text"
              class="datainput"
              onKeyDown={(e) => handleKeyDown(e)}
              ref={commandInput}
            />
            <i></i>
          </span>{" "}
        </p>
      )}

      {tempMessage ? (
        <Typewriter
          options={{
            delay: 1,
            cursor: "",
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(tempMessage)
              .callFunction(() => {
                setAskCommand(true);
              })
              .start();
          }}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
