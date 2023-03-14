import React, { useState } from "react";

// import component
import UtilsInbox from "./UtilsInbox";

const UtilsInboxContainer = () => {
  const [detailPage, setDetailPage] = useState(false);
  return (
    <div>
      {detailPage ? (
        <UtilsInbox setDetailPage={setDetailPage} />
      ) : (
        <UtilsInbox setDetailPage={setDetailPage} />
      )}
    </div>
  );
};

export default UtilsInboxContainer;
