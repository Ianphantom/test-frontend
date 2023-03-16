import React, { useState, useEffect } from "react";
import styled from "styled-components";

// import component
import UtilsInbox from "./UtilsInbox";
import UtilsInboxDetail from "./UtilsInboxDetail";

// import dummy data
import messageJson from "../dummyData/messegeDetail.json";

const UtilsInboxContainer = ({ quicksMainHandler }) => {
  const [detailPage, setDetailPage] = useState(0);
  const [dataResult, setDataResult] = useState([]);
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
    setDataResult(result);
    setDataSementara(result);
  }, []);
  return (
    <ContainerStyled>
      {detailPage === 0 ? (
        <UtilsInbox
          setDetailPage={setDetailPage}
          dataSementara={dataSementara}
          setDataSementara={setDataSementara}
        />
      ) : (
        <UtilsInboxDetail
          detailPage={detailPage}
          setDetailPage={setDetailPage}
          quicksMainHandler={quicksMainHandler}
          dataSementara={dataSementara}
          setDataSementara={setDataSementara}
        />
      )}
    </ContainerStyled>
  );
};

const ContainerStyled = styled.div``;

export default UtilsInboxContainer;
