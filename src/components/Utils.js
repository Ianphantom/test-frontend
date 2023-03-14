import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

// import svg-icon
import thunder from "../images/svg-icon/thunder.svg";
import taskSecondary from "../images/svg-icon/task-secondary.svg";
import messegeSecondary from "../images/svg-icon/messege-secondary.svg";

const Utils = () => {
  const [clicked, setClicked] = useState(false);
  const quicksMainHandler = () => {
    setClicked(!clicked);
  };

  const item = {
    hidden: {
      x: 100, //move out of the site
      opacity: 0,
    },
    visible: {
      x: 0, // bring it back to nrmal
      opacity: 1,
    },
  };

  return (
    <UtilsStyled>
      <div className='utils-container'>
        <AnimatePresence>
          {clicked && (
            <div className='expand-utils' key={clicked}>
              <motion.div
                variants={item}
                animate='visible'
                initial='hidden'
                exit={{ opacity: 0 }}
                className='expanded-util-container'
              >
                <div className='text-color-white text-14 text-regular'>
                  Task
                </div>
                <div className='round-button-secondary bg-light'>
                  <img src={taskSecondary} alt='task-icon' />
                </div>
              </motion.div>
              <motion.div
                animate='visible'
                initial='hidden'
                exit={{ opacity: 0 }}
                variants={item}
                className='expanded-util-container'
              >
                <div className='text-color-white text-14 text-regular'>
                  Inbox
                </div>
                <div className='round-button-secondary bg-light'>
                  <img src={messegeSecondary} alt='task-icon' />
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        <div
          className='main-icon round-button-main bg-primary'
          onClick={quicksMainHandler}
        >
          <img src={thunder} alt='thunder-icon' />
        </div>
      </div>
    </UtilsStyled>
  );
};

const UtilsStyled = styled.div`
  position: fixed;
  bottom: 27px;
  right: 34px;
  .utils-container {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    gap: 26px;
    .expand-utils {
      display: flex;
      align-items: center;
      gap: 26px;
      .expanded-util-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 14px;
      }
    }
  }
`;

export default Utils;
