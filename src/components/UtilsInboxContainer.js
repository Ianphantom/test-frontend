import React, { useState } from "react";

// import component
import UtilsInbox from "./UtilsInbox";
import UtilsInboxDetail from "./UtilsInboxDetail";

const UtilsInboxContainer = () => {
  const [detailPage, setDetailPage] = useState(0);
  return (
    <div>
      {detailPage === 0 ? (
        <UtilsInbox setDetailPage={setDetailPage} />
      ) : (
        <UtilsInboxDetail setDetailPage={setDetailPage} />
      )}
    </div>
  );
};

export default UtilsInboxContainer;
