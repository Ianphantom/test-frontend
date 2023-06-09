import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import searchIcon from "../images/svg-icon/search.svg";
import loading from "../images/svg-icon/loading.svg";
import UtilsBoxItem from "./UtilsInboxItem";

const UtilsInbox = ({ setDetailPage, dataSementara, setDataSementara }) => {
  const [filterText, setFilterText] = useState("");
  const [dataResult, setDataResult] = useState(dataSementara);
  const [isLoading, setIsLoading] = useState(true);

  // karna nggak ada API search item nya, difilter manual saja
  const filterHandler = (e) => {
    setFilterText(e.target.value);
    if (e.target.value === "") {
      setDataResult(dataSementara);
    } else {
      const coba = dataSementara.filter((item) =>
        item.title.toLowerCase().includes(filterText.toLowerCase())
      );
      setDataResult(coba);
    }
  };

  useEffect(() => {
    setDataResult(dataSementara);
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  }, [dataSementara]);

  // console.log(result);
  return (
    <InboxContainer>
      <div className='search-container text-12 text-color-3 text-regular'>
        <input type='text' placeholder='Search' onChange={filterHandler} />
        <img className='search-button' src={searchIcon} alt='search-icon' />
      </div>

      {isLoading && (
        <div className='isLoading'>
          <img src={loading} alt={"loading-icon"} />
          <div className='text-color-2 text-14 '>Loading Chats</div>
        </div>
      )}

      {!isLoading && (
        <motion.div className='messageList'>
          {dataResult.length === 0 && (
            <div className='text-14 noData'>Tidak ada data</div>
          )}
          {dataResult.length !== 0 &&
            dataResult.map((item) => (
              <div key={item.id}>
                <UtilsBoxItem setDetailPage={setDetailPage} item={item} />
                {item.id !== `${dataResult.length}` && (
                  <hr className='bg-color-3' />
                )}
              </div>
            ))}
        </motion.div>
      )}
    </InboxContainer>
  );
};

const InboxContainer = styled.div`
  padding: 24px 32px;
  height: 734px;
  overflow-y: auto;
  position: relative;
  ::-webkit-scrollbar {
    width: 14px;
  }

  ::-webkit-scrollbar-thumb {
    border: 4px solid rgba(0, 0, 0, 0);
    background-clip: padding-box;
    border-radius: 9999px;
    background-color: #aaaaaa;
  }
  .noData {
    padding: 22px 0px;
  }
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

  .messageList {
    height: 90%;
  }

  .isLoading {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    flex-direction: column;
    img {
      width: 60px;
      height: 60px;
    }
  }

  @media (max-width: 1513px) {
    height: 70vh;
  }
  @media (max-width: 800px) {
    height: 80vh;
  }
`;

export default UtilsInbox;
