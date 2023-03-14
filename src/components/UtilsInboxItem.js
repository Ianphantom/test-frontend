import React from "react";
import styled from "styled-components";

import DoublePerson from "./ProfileDoublePerson";

const UtilsBoxItem = ({ item }) => {
  return (
    <BoxItemContainer>
      <div className='profile-image'>
        {item.participant > 1 ? (
          <DoublePerson />
        ) : (
          <div className='circle text-16 text-bold bg-primary text-color-white'>
            {item.nama.charAt(0)}
          </div>
        )}
      </div>
      <div className='information'>
        <div className='top'>
          <div className='title text-16 text-color-primary text-bold'>
            {item.nama}
          </div>
          <div className='tanggal text-16'>{item.tanggal}</div>
        </div>
        <div className='bottom'>
          {item.participant > 1 ? (
            <div className='userName text-14 text-bold'>
              {item.last_messege.sender}
            </div>
          ) : (
            ""
          )}
          <div className='message text-14 text-regular'>
            {item.last_messege.messege}
          </div>
        </div>
      </div>
      <div className='read-information'></div>
    </BoxItemContainer>
  );
};

const BoxItemContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
  padding: 22px 0px;
  .profile-image {
    width: 7%;
    display: flex;
    justify-content: center;

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
    display: flex;
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
`;

export default UtilsBoxItem;
