import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

// import component
import ActiveWidget from "./ActiveWidget";
import UtilsInboxContainer from "./UtilsInboxContainer";

// import svg-icon
import thunder from "../images/svg-icon/thunder.svg";
import taskSecondary from "../images/svg-icon/task-secondary.svg";
import messegeSecondary from "../images/svg-icon/messege-secondary.svg";

const Utils = () => {
  const [mainClicked, setMainClicked] = useState(false);
  const [quicksWidget, setQuickWidget] = useState([
    { id: 1, name: "Task", active: false, icon: taskSecondary },
    { id: 2, name: "Inbox", active: false, icon: messegeSecondary },
  ]);
  const [activeWidget, setActiveWidget] = useState("");

  const quicksMainHandler = () => {
    setMainClicked(!mainClicked);
    itemClickHandler(0);
    setActiveWidget("");
  };

  const anim = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  const itemClickHandler = (id) => {
    let newItems;
    newItems = quicksWidget.map((item) => {
      if (item.id === id) {
        setActiveWidget(item.name);
        return { ...item, active: true };
      }

      return { ...item, active: false };
    });
    setQuickWidget(newItems);
  };

  return (
    <UtilsStyled>
      {activeWidget && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className='text-container bg-light'
        >
          {activeWidget === "Inbox" ? (
            <UtilsInboxContainer />
          ) : (
            <UtilsInboxContainer />
          )}
        </motion.div>
      )}

      <div className='utils-container'>
        <AnimatePresence>
          {mainClicked && (
            <div className='expand-utils' key={mainClicked}>
              {quicksWidget.map(
                (item) =>
                  !item.active && (
                    <motion.div
                      key={item.id}
                      variants={anim}
                      animate='visible'
                      initial='hidden'
                      exit={{ opacity: 0, x: 50 }}
                      className='expanded-util-container'
                      onClick={() => itemClickHandler(item.id, item.name)}
                    >
                      <div
                        className={`text-color-white text-14 text-regular ${
                          activeWidget === "" ? "" : "hide"
                        }`}
                      >
                        {item.name}
                      </div>
                      <div className='round-button-secondary bg-light'>
                        <img src={item.icon} alt='task-icon' />
                      </div>
                    </motion.div>
                  )
              )}
            </div>
          )}
        </AnimatePresence>

        {activeWidget === "" ? (
          <div
            className='main-icon round-button-main bg-primary'
            onClick={quicksMainHandler}
          >
            <img src={thunder} alt='thunder-icon' />
          </div>
        ) : (
          <ActiveWidget
            activeWidget={activeWidget}
            quicksMainHandler={quicksMainHandler}
          />
        )}
      </div>
    </UtilsStyled>
  );
};

const UtilsStyled = styled.div`
  position: fixed;
  bottom: 27px;
  right: 34px;
  .text-container {
    width: 734px;
    height: 737px;
    margin-bottom: 15px;
    border-radius: 8px;
    overflow-y: auto;
    ::-webkit-scrollbar {
      width: 14px;
    }

    ::-webkit-scrollbar-thumb {
      border: 4px solid rgba(0, 0, 0, 0);
      background-clip: padding-box;
      border-radius: 9999px;
      background-color: #aaaaaa;
    }
  }
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

  .hide {
    display: none;
  }
`;

export default Utils;
