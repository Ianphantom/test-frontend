import React, { useState } from "react";
import styled from "styled-components";

import down from "../images/svg-icon/down.svg";

const TaskHeader = ({ nowShowing, setNowShowing }) => {
  const [isClicked, setIsClicked] = useState(false);

  const clickHandler = () => {
    setIsClicked(!isClicked);
  };

  const showHandler = (item) => {
    setNowShowing(item);
    setIsClicked(!isClicked);
  };
  return (
    <TaskHeaderStyled>
      <div className='left'>
        <div className='mytask'>
          <div className='button' onClick={clickHandler}>
            <div className='text text-14 text-bold text-color-2'>
              {nowShowing}
            </div>
            <div>
              <img src={down} alt='down-icon' />
            </div>
          </div>
          {isClicked && (
            <div className='optionMyTask text-14 text-bold text-color-2 bg-light'>
              <div
                className='item-option'
                onClick={() => showHandler("All Task")}
              >
                All Task
              </div>
              <hr />
              <div
                className='item-option'
                onClick={() => showHandler("Personal Errands")}
              >
                Personal Errands
              </div>
              <hr />
              <div
                className='item-option'
                onClick={() => showHandler("Urgent To-Do")}
              >
                Urgent To-Do
              </div>
            </div>
          )}
        </div>
      </div>
      <div className='right'>
        <div className='button-container text-color-white text-14 text-bold bg-primary'>
          New Task
        </div>
      </div>
    </TaskHeaderStyled>
  );
};

const TaskHeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  .left {
    .mytask {
      position: relative;
      .button {
        width: fit-content;
        cursor: pointer;
        padding: 14px 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 7px;
        border: 1px solid #828282;
        border-radius: 5px;
      }
      .optionMyTask {
        width: 288px;
        border: 1px solid #828282;
        margin-top: 7px;
        border-radius: 5px;
        position: absolute;
        .item-option {
          cursor: pointer;
          padding: 13px 13px;
        }
      }
    }
  }

  .right {
    .button-container {
      padding: 14px 16px;
      border-radius: 5px;
      cursor: pointer;
    }
  }
`;

export default TaskHeader;
