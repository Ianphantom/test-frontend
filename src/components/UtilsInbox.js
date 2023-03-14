import React from "react";
import styled from "styled-components";

import searchIcon from "../images/svg-icon/search.svg";
import UtilsBoxItem from "./UtilsInboxItem";

const UtilsInbox = () => {
  //   const [currentRoute, setCurrentRoute] = useState("inbox");
  return (
    <InboxContainer>
      <div className='search-container text-12 text-color-3 text-regular'>
        <input type='text' placeholder='Search' />
        <img className='search-button' src={searchIcon} alt='search-icon' />
      </div>
      <UtilsBoxItem />
    </InboxContainer>
  );
};

const InboxContainer = styled.div`
  padding: 24px 32px;

  .search-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 10px;
    border: 1px solid #828282;
    border-radius: 5px;

    input {
      width: 100%;
      border: none;
      outline: none;
    }

    .search-button {
      cursor: pointer;
    }
  }
`;

export default UtilsInbox;
