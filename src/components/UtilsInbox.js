import React, { useEffect, useState } from "react";
import styled from "styled-components";

import searchIcon from "../images/svg-icon/search.svg";
import UtilsBoxItem from "./UtilsInboxItem";

// import dummy data
import messageJson from "../dummyData/messege.json";

const UtilsInbox = () => {
  //   const [currentRoute, setCurrentRoute] = useState("inbox");
  //   karna nggak ada backend jadinya ngolah data nya di array yang disimpan di state aja :'v
  const [dataSementara, setDataSementara] = useState([]);

  useEffect(() => {
    // misal ada fungsi fetching seperti ini
    // async function getData(url) {
    //     try {
    //       const response = await fetch(url);
    //       if (!response.ok) {
    //         throw new Error(`HTTP error! status: ${response.status}`);
    //       }
    //       const data = await response.json();
    //       console.log(data);
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   }
    // anggap data yang direturn tadi messageJSON
    const result = messageJson.data;
    setDataSementara(result);
  }, []);

  return (
    <InboxContainer>
      <div className='search-container text-12 text-color-3 text-regular'>
        <input type='text' placeholder='Search' />
        <img className='search-button' src={searchIcon} alt='search-icon' />
      </div>
      {dataSementara.map((item) => (
        <UtilsBoxItem key={item.id} item={item} />
      ))}
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
