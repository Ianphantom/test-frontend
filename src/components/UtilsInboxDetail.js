import React, { useEffect, useState } from "react";
import styled from "styled-components";

// import component
import UtilsInboxDetailHeader from "./UtilsInboxDetailHeader";
import InboxDetail from "../dummyData/messegeDetail.json";
import MessageComponent from "./MessageComponent";

const UtilsInboxDetail = ({ detailPage, setDetailPage, quicksMainHandler }) => {
  const [results, setResults] = useState({});
  const [dataSementara, setDataSementara] = useState({});
  const [isVisible, setIsVisible] = useState(true);

  const scrollHandler = () => {
    const scrollDiv = document.querySelector(`.new-messege`);
    scrollDiv.scrollIntoView();
  };
  useEffect(() => {
    // misal kita anggap ada endpoit dengan http method GET /message/id
    // kita tinggal panggil endpoint tersebut dengan kode dibawah ini
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
    // karena endpoint nya tidak ada maka saya menjalankan fungsi dibawah ini saja
    // logicnya ada json file, teruss isi nya saya filter berdasarkan id nya saja

    const dataReturn = InboxDetail.data;
    const dataResult = dataReturn.filter((item) => item.id === detailPage);
    setResults(dataResult[0]);
    setDataSementara(dataResult[0]);
  }, [detailPage]);

  return (
    <InboxDetailStyled>
      <UtilsInboxDetailHeader
        className='header'
        setDetailPage={setDetailPage}
        quicksMainHandler={quicksMainHandler}
        results={results}
      />

      {dataSementara.hasOwnProperty("id") ? (
        <MessageComponent
          dataSementara={dataSementara}
          setDataSementara={setDataSementara}
          isVisible={isVisible}
          setIsVisible={setIsVisible}
        />
      ) : (
        ""
      )}

      <div className='replyContainer'>
        {isVisible === false ? (
          <div
            className='new-messege-alert text-16 text-regular text-color-primary'
            onClick={scrollHandler}
          >
            <div className='text'>New Messege</div>
          </div>
        ) : null}
        <div className='reply bg-light'>
          <input
            className='text-14'
            type='text'
            placeholder='Type a new message'
          />
          <div className='button text-14 text-color-white bg-primary'>Send</div>
        </div>
      </div>
    </InboxDetailStyled>
  );
};

const InboxDetailStyled = styled.div`
  height: 734px;
  position: relative;
  .replyContainer {
    width: 100%;
    position: absolute;
    bottom: 0px;
    .new-messege-alert {
      width: 100%;
      display: flex;
      justify-content: center;
      cursor: pointer;
      .text {
        border-radius: 8px;
        width: fit-content;
        text-align: center;
        padding: 8px 12px;
        background: #e9f3ff;
        margin-bottom: 12px;
      }
    }
    .reply {
      padding: 19px 32px;
      display: flex;
      align-items: center;
      gap: 13px;
      input {
        width: 100%;
        padding: 12px 16px;
        border-radius: 8px;
        outline: none;
        border: 1px solid #828282;
      }
      .button {
        width: fit-content;
        padding: 12px 16px;
        border-radius: 8px;
      }
    }
  }
`;

export default UtilsInboxDetail;
