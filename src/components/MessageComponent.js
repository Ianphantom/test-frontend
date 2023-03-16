import { motion } from "framer-motion";
import React, { forwardRef, useState, useRef } from "react";
import styled from "styled-components";

// import component
import EachMessegeComponent from "./EachMessageComponent";

const MessageComponent = ({ results, setResult, setIsVisible }) => {
  const newRef = React.createRef();
  const containerRef = useRef(null);
  const [user] = useState(
    results.participantName.filter((item) => item.name !== "You")
  );

  const getById = (sender) => {
    return user.findIndex((item) => item.name === sender);
  };

  const changeVisibility = (check) => {
    setIsVisible(check);
  };

  const scrollHandle = () => {
    const container = containerRef.current;
    const element = newRef.current;

    if (element !== null) {
      const containerTop = container.getBoundingClientRect().top;
      const containerHeight = container.offsetHeight;
      const elementTop = element.getBoundingClientRect().top;
      const elementHeight = element.offsetHeight;

      if (
        elementTop - containerTop >= 0 &&
        elementTop + elementHeight - containerTop <= containerHeight
      ) {
        changeVisibility(true);
      } else {
        changeVisibility(false);
      }
    } else {
      changeVisibility(true);
    }
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

  const renderItem = (items, isRead) => {
    let isShown = false;
    const processData = items.map((item) => {
      const checkNewMessege =
        item.id_message - "1" === Number(results.last_chat_read);
      const isMeSender = item.sender === "you";
      const isReaded = isRead === "true";
      if (!isShown && item.date === "03/06/2021") {
        isShown = true;
        return (
          <div key={item.id_message}>
            <div className='text-with-lines indicator today text-16 text-bold text-color-2'>
              <span>Today June 03, 2021</span>
            </div>
            {checkNewMessege && !isMeSender && !isReaded ? (
              <NewMessegeIndicator ref={newRef} />
            ) : null}
            <EachMessegeComponent item={item} id={getById(item.sender)} />
          </div>
        );
      } else {
        return (
          <div key={item.id_message}>
            {checkNewMessege && !isMeSender && !isReaded ? (
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
    <MessageContainer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      ref={containerRef}
      onScroll={scrollHandle}
    >
      <React.Fragment>{renderItem(results.chats, results.read)}</React.Fragment>
    </MessageContainer>
  );
};

const MessageContainer = styled(motion.div)`
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
`;

export default MessageComponent;
