import React, { useState } from "react";
import styled from "styled-components";

// import component
import UtilsInbox from "./UtilsInbox";
import UtilsInboxDetail from "./UtilsInboxDetail";

const UtilsInboxContainer = () => {
  const [detailPage, setDetailPage] = useState(0);
  return (
    <ContainerStyled>
      {detailPage === 0 ? (
        <UtilsInbox setDetailPage={setDetailPage} />
      ) : (
        <UtilsInboxDetail
          detailPage={detailPage}
          setDetailPage={setDetailPage}
        />
      )}
    </ContainerStyled>
  );
};

const ContainerStyled = styled.div``;

export default UtilsInboxContainer;
