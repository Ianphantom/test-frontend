import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import inboxIcon from "../images/svg-icon/messege-primary.svg";
import taskIcon from "../images/svg-icon/task-primary.svg";

const ActiveWidget = ({ activeWidget, quicksMainHandler }) => {
  const img = activeWidget === "Task" ? taskIcon : inboxIcon;
  return (
    <ActiveWidgetContainer
      key={activeWidget}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className='circle-container'>
        <div className='circle' onClick={quicksMainHandler}></div>
        <div className={`circle ${activeWidget.toLowerCase()}`} id='full'>
          <img src={img} alt='widget-icon' />
        </div>
      </div>
    </ActiveWidgetContainer>
  );
};

const ActiveWidgetContainer = styled(motion.div)`
  .circle-container {
    display: flex;

    .circle {
      cursor: pointer;
      width: 68px;
      height: 68px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #4f4f4f;

      &#full {
        margin-left: -53px;
      }

      &.inbox {
        background: #8785ff;
      }

      &.task {
        background: #f8b76b;
      }
    }
  }
`;

export default ActiveWidget;
