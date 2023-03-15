import React from "react";
import styled from "styled-components";

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
        <svg
          width='16'
          height='16'
          viewBox='0 0 16 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M4.00008 6.66667C3.26675 6.66667 2.66675 7.26667 2.66675 8.00001C2.66675 8.73334 3.26675 9.33334 4.00008 9.33334C4.73341 9.33334 5.33341 8.73334 5.33341 8.00001C5.33341 7.26667 4.73341 6.66667 4.00008 6.66667ZM12.0001 6.66667C11.2667 6.66667 10.6667 7.26667 10.6667 8.00001C10.6667 8.73334 11.2667 9.33334 12.0001 9.33334C12.7334 9.33334 13.3334 8.73334 13.3334 8.00001C13.3334 7.26667 12.7334 6.66667 12.0001 6.66667ZM6.66675 8.00001C6.66675 7.26667 7.26675 6.66667 8.00008 6.66667C8.73341 6.66667 9.33341 7.26667 9.33341 8.00001C9.33341 8.73334 8.73341 9.33334 8.00008 9.33334C7.26675 9.33334 6.66675 8.73334 6.66675 8.00001Z'
            fill='#4F4F4F'
          />
        </svg>
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

    svg {
      cursor: pointer;
    }
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
