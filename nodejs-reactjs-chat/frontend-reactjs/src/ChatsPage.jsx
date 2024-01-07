import React, { useState } from "react";
import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from "react-chat-engine-advanced";
import { PrettyChatWindow } from "react-chat-engine-pretty";


// ---------------------------------------------------------

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
    "ada59c5a-b522-49a7-bc06-47356b160e92",
    props.user.username,
    props.user.secret
  )

  const [pretty, setPretty] = useState(false);

  return (
    <>
      <div style={{ height: "100dvh" }}>
        {pretty ?
          <>
            <PrettyChatWindow
              projectId="ada59c5a-b522-49a7-bc06-47356b160e92"
              username={props.user.username}
              secret={props.user.secret}
              style={{ height: "100%" }}
            />
          </>
          :
          <>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{ height: "100%" }} />
          </>
        }
      </div>
    </>
  );
}


// ---------------------------------------------------------

export default ChatsPage;