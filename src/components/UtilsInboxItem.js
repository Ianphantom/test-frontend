import React from "react";
import styled from "styled-components";

import DoublePerson from "./ProfileDoublePerson";

const UtilsBoxItem = () => {
  return (
    <BoxItemContainer>
      <div className='profile-image'>
        <DoublePerson />
        <div className='circle text-16 text-bold bg-primary text-color-white'>
          {"Cameron".charAt(0)}
        </div>
      </div>
      <div className='information'>
        <div className='top'>
          <div className='title text-16 text-color-primary text-bold'>
            109220-Naturalization
          </div>
          <div className='tanggal text-16'>02/06/2021 10:45</div>
        </div>
        <div className='bottom'>
          <div className='userName text-14 text-bold'>Cameron Philips :</div>
          <div className='message text-14 text-regular'>
            Please check this out!
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
