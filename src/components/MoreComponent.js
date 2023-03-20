import React, { useState } from "react";
import styled from "styled-components";
import more from "../images/svg-icon/more.svg";

const MoreComponent = ({ setReplyChat, item }) => {
  const [isClicked, setIsClicked] = useState(false);
  const clickHandler = () => {
    setIsClicked(!isClicked);
  };

  const replyHandler = () => {
    setIsClicked(!isClicked);

    setReplyChat(item);
  };
  return (
    <MoreStyled>
      <img src={more} alt='' onClick={clickHandler} />
      {isClicked && (
        <div className='more-information text-16'>
          <div className='information-item edit text-color-primary'>Share</div>
          <div
            className='information-item text-color-primary'
            onClick={replyHandler}
          >
            Reply
          </div>
        </div>
      )}
    </MoreStyled>
  );
};

const MoreStyled = styled.div`
  cursor: pointer;
  position: relative;

  .more-information {
    position: absolute;
    background: #ffffff;
    width: 126px;
    border: 1px solid #bdbdbd;
    border-radius: 8px;
    .information-item {
      padding: 15px 15px;
      &.delete {
        color: #eb5757;
        border-top: 1px solid #bdbdbd;
      }
    }
  }
`;

export default MoreComponent;
