import React, { useState } from "react";
import styled from "styled-components";

// import component
import EachMessegeComponent from "./EachMessageComponent";

const MessageComponent = ({ dataSementara, setDataSementara }) => {
  const [user] = useState(
    dataSementara.participantName.filter((item) => item.name !== "You")
  );

  const getById = (sender) => {
    return user.findIndex((item) => item.name === sender);
  };
  return (
    <MessageContainer>
      {dataSementara.chats.map((item) => (
        <EachMessegeComponent
          key={item.id_message}
          item={item}
          id={getById(item.sender)}
        />
      ))}
    </MessageContainer>
  );
};

const MessageContainer = styled.div`
  padding: 14px 32px;
  height: 60vh;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 14px;
  }

  ::-webkit-scrollbar-thumb {
    border: 4px solid rgba(0, 0, 0, 0);
    background-clip: padding-box;
    border-radius: 9999px;
    background-color: #aaaaaa;
  }
`;

export default MessageComponent;
