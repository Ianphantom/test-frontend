import React, { forwardRef, useState, useRef } from "react";
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

    console.log(isVisible);
  };

  const NewMessegeIndicator = forwardRef((props, ref) => (
    <div
      className='text-with-lines indicator new-messege text-16 text-bold text-color-2'
      ref={ref}
      {...props}
    >
      <span>New Message</span>
    </div>
  ));

  const renderItem = (items) => {
    let isShown = false;
    const processData = items.map((item) => {
      if (!isShown && item.date === "03/06/2021") {
        isShown = true;
        return (
          <div key={item.id_message}>
            <div className='text-with-lines indicator today text-16 text-bold text-color-2'>
              <span>Today June 03, 2021</span>
            </div>
            {item.id_message === dataSementara.last_chat_read ? (
              <NewMessegeIndicator ref={newRef} />
            ) : null}
            <EachMessegeComponent item={item} id={getById(item.sender)} />
          </div>
        );
      } else {
        return (
          <div key={item.id_message}>
            {item.id_message === dataSementara.last_chat_read ? (
              <NewMessegeIndicator ref={newRef} />
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

  .text-with-lines {
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #000;
    line-height: 0.1em;
    margin: 30px 0 30px;
  }

  .text-with-lines span {
    background: #fff;
    padding: 0 10px;
  }

  .new-messege {
    background: #eb5757 !important;
    color: #eb5757 !important;
    border-bottom: 1px solid #eb5757 !important;
  }
  /* .text-with-lines {
    position: relative;
  }

  .text-with-lines::before,
  .text-with-lines::after {
    content: "";
    position: absolute;
    top: 0;
    width: 50%;
    height: 1px;
    background-color: black;
  } */

  /* .text-with-lines::before {
    left: 0;
  }

  .text-with-lines::after {
    right: 0;
  } */
`;

export default MessageComponent;
