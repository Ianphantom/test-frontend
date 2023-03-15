import React, { useEffect, forwardRef, useState, useRef } from "react";
import styled from "styled-components";

// import component
import EachMessegeComponent from "./EachMessageComponent";

const MessageComponent = ({
  dataSementara,
  setDataSementara,
  setIsVisible,
  isVisible,
}) => {
  const newRef = React.createRef();
  const containerRef = useRef(null);
  const [user] = useState(
    dataSementara.participantName.filter((item) => item.name !== "You")
  );

  const getById = (sender) => {
    return user.findIndex((item) => item.name === sender);
  };

  const scrollHandle = () => {
    const container = containerRef.current;
    const element = newRef.current;

    const containerTop = container.getBoundingClientRect().top;
    const containerHeight = container.offsetHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementHeight = element.offsetHeight;

    if (
      elementTop - containerTop >= 0 &&
      elementTop + elementHeight - containerTop <= containerHeight
    ) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const FancyInput = forwardRef((props, ref) => (
    <div>
      <div ref={ref} {...props}>
        New Message
      </div>
    </div>
  ));

  const renderItem = (items) => {
    let isShown = false;
    const processData = items.map((item) => {
      if (!isShown && item.date === "03/06/2021") {
        isShown = true;
        return (
          <div key={item.id_message}>
            <div>KJAHSjklahfgkljsdfhklasdjhfkladsjhfklasdf</div>
            {item.id_message === dataSementara.last_chat_read ? (
              <FancyInput ref={newRef} />
            ) : null}
            <EachMessegeComponent item={item} id={getById(item.sender)} />
          </div>
        );
      } else {
        return (
          <div key={item.id_message}>
            {item.id_message === dataSementara.last_chat_read ? (
              <FancyInput ref={newRef} />
            ) : null}
            <EachMessegeComponent item={item} id={getById(item.sender)} />
          </div>
        );
      }
    });

    return processData;
  };

  return (
    <MessageContainer ref={containerRef} onScroll={scrollHandle}>
      <React.Fragment>{renderItem(dataSementara.chats)}</React.Fragment>
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
