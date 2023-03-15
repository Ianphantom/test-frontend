import React from "react";
import styled from "styled-components";

import MoreComponent from "./MoreComponent";

const EachMessegeComponent = ({ item, id }) => {
  return (
    <EachComponent className={item.sender === "you" ? "me" : `other-${id}`}>
      <div className='sender text-14 text-bold'>{item.sender}</div>
      <div className='bottom'>
        <div className='messegeContainer'>
          <div className='text-14 text-color-2 text-regular'>
            {item.messege}
          </div>
          <div className='time text-12 text-color-2 text-regular'>
            {item.time}
          </div>
        </div>
        <MoreComponent />
      </div>
    </EachComponent>
  );
};

const EachComponent = styled.div`
  padding: 11px 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  &.me {
    color: #9b51e0;
    align-items: flex-end;
    .bottom {
      flex-direction: row-reverse;
      justify-content: flex-start;
    }
    .messegeContainer {
      background: #eedcff;
    }
  }

  &.other-1 {
    color: #e5a443;
    /* justify-content: flex-start; */
    .messegeContainer {
      background: #fceed3;
    }
    .bottom {
      /* flex-direction: row-reverse; */
      justify-content: flex-start;
    }
  }

  &.other-0 {
    color: #43b78d;
    .messegeContainer {
      background: #d2f2ea;
    }
    /* .bottom {
      flex-direction: row-reverse;
    } */
    /* justify-content: flex-start; */
  }

  .bottom {
    display: flex;
    gap: 5px;
  }

  .sender {
    margin-bottom: 7px;
  }

  .messegeContainer {
    max-width: 55%;
    border-radius: 5px;
    padding: 10px;
    .time {
      margin-top: 12px;
    }
  }
`;

export default EachMessegeComponent;
