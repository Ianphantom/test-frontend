import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

import DoublePerson from "./ProfileDoublePerson";

const UtilsBoxItem = ({ setDetailPage, item }) => {
  const viewDetailHandler = (id) => {
    setDetailPage(id);
  };
  return (
    <BoxItemContainer onClick={() => viewDetailHandler(item.id)}>
      <div className='profile-image'>
        {item.participant >= 2 && <DoublePerson />}
        {item.participant < 2 && (
          <div className='circle text-16 text-bold bg-primary text-color-white'>
            {item.title.charAt(0)}
          </div>
        )}
      </div>
      <div className='information'>
        <div className='top'>
          <div className='title text-16 text-color-primary text-bold'>
            {item.title}
          </div>
          <div className='tanggal text-16'>
            {item.chats[item.chats.length - 1].date}
          </div>
        </div>
        <div className='bottom'>
          {item.participant > 1 && (
            <div className='userName text-14 text-bold'>
              {item.last_messege.sender}
            </div>
          )}
          <div className='message text-14 text-regular'>
            {item.last_messege.messege}
          </div>
        </div>
      </div>
      {item.read === "false" && (
        <div className='read-information'>
          <svg
            width='10'
            height='10'
            viewBox='0 0 10 10'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M10 5C10 7.76142 7.76142 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.76142 0 10 2.23858 10 5Z'
              fill='#EB5757'
            />
          </svg>
        </div>
      )}
    </BoxItemContainer>
  );
};

const BoxItemContainer = styled(motion.div)`
  display: flex;
  gap: 15px;
  padding: 22px 0px;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  .profile-image {
    width: 7%;
    display: flex;
    justify-content: center;
    align-self: flex-start;
    .circle {
      width: 34px;
      height: 34px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .information {
    width: 100%;
    display: flex;
    align-self: flex-start;
    flex-direction: column;
    gap: 8px;
    .top {
      display: flex;
      align-items: flex-start;
      gap: 15px;
      .tanggal {
        white-space: nowrap;
      }
    }
    .bottom {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
  }

  .read-information {
    height: 100%;
    align-items: center;
    justify-items: flex-end;
  }
`;

export default UtilsBoxItem;
