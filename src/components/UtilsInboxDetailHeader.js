import React from "react";
import styled from "styled-components";

// import icon
import leftIcon from "../images/svg-icon/left.svg";
import closeIcon from "../images/svg-icon/close.svg";

const UtilsInboxDetailHeader = () => {
  return (
    <HeaderContainer>
      <div className='left'>
        <img src={leftIcon} alt='left-icon' />
      </div>
      <div className='right'>
        <div className='information'>
          <div className='title text-16 text-bold text-color-primary'>
            I-589 - AMARKHIL, Obaidullah [Affirmative Filing with ZHN]
          </div>
          <div className='participant text-14 text-regular text-color-2'>
            3 participant
          </div>
        </div>
        <div className='close'>
          <img src={closeIcon} alt='close-icon' />
        </div>
      </div>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  padding: 24px 32px;
  display: flex;
  align-items: center;
  gap: 14px;
  border-bottom: 1px solid #bdbdbd;
  position: sticky;
  top: 0;
  background-color: white;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  img {
    cursor: pointer;
  }
  .right {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .information {
      .title {
        margin-bottom: 8px;
      }
    }
  }
`;

export default UtilsInboxDetailHeader;
