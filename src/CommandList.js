import React, { useEffect, useRef, useState } from "react";
import Typewriter from "typewriter-effect";
function CommandList({command,setAskCommand1,index}) {

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
                }).typeString(
                    command
                  ).callFunction(() => {
                    setAskCommand1(index+1);                    
                  })
                .start();
            }}
          />
          
     
        </p>
  </>
   
  );
}

export default CommandList;
