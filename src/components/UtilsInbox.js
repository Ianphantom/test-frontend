import React, { useEffect, useState } from "react";
import styled from "styled-components";

import searchIcon from "../images/svg-icon/search.svg";
import UtilsBoxItem from "./UtilsInboxItem";

// import dummy data
import messageJson from "../dummyData/messege.json";

const UtilsInbox = () => {
  //   karna nggak ada backend jadinya ngolah data nya di array yang disimpan di state aja :'v
  const [dataResult, setDataResult] = useState([]);
  const [dataSementara, setDataSementara] = useState([]);
  const [filterText, setFilterText] = useState("");

  // karna nggak ada API search item nya, difilter manual saja
  const filterHandler = (e) => {
    setFilterText(e.target.value);
    if (e.target.value === "") {
      console.log("data kosong");
      setDataSementara(dataResult);
    } else {
      const coba = dataSementara.filter((item) =>
        item.nama.toLowerCase().includes(filterText.toLowerCase())
      );
      setDataSementara(coba);
    }
  };

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
    setDataResult(result);
    setDataSementara(result);
  }, []);

  //   const coba = dataSementara.filter((item) =>
  //     item.nama.toLowerCase().includes("di")
  //   );
  //   console.log(coba);
  return (
    <InboxContainer>
      <div className='search-container text-12 text-color-3 text-regular'>
        <input type='text' placeholder='Search' onChange={filterHandler} />
        <img className='search-button' src={searchIcon} alt='search-icon' />
      </div>
      {dataSementara.length === 0 ? (
        <div className='text-14 noData'>Tidak ada data</div>
      ) : (
        dataSementara.map((item) => (
          <div key={item.id}>
            <UtilsBoxItem item={item} />
            {item.id !== `${dataSementara.length}` ? (
              <hr className='bg-color-3' />
            ) : (
              ""
            )}
          </div>
        ))
      )}
    </InboxContainer>
  );
};

const InboxContainer = styled.div`
  padding: 24px 32px;

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
`;

export default UtilsInbox;
