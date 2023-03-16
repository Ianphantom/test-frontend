import React, { useEffect, useState } from "react";
import styled from "styled-components";

// import component
import UtilsInboxDetailHeader from "./UtilsInboxDetailHeader";
// import InboxDetail from "../dummyData/messegeDetail.json";
import MessageComponent from "./MessageComponent";
import { motion } from "framer-motion";

const UtilsInboxDetail = ({
  detailPage,
  setDetailPage,
  quicksMainHandler,
  dataSementara,
  setDataSementara,
}) => {
  const [results, setResults] = useState(
    dataSementara.filter((item) => item.id === detailPage).shift()
  );
  const [isVisible, setIsVisible] = useState(true);
  const [inputUser, setInputUser] = useState("");

  const scrollHandler = () => {
    const scrollDiv = document.querySelector(`.new-messege`);
    scrollDiv.scrollIntoView();
  };

  const inputHandler = (e) => {
    setInputUser(e.target.value);
  };

  const sendHandler = () => {
    if (inputUser.length === 0) {
      alert("Masukkan pesan terlebih dahulu");
    } else {
      const last_id = results.chats.length;

      const newMessege = {
        id_message: `${last_id + 1}`,
        sender: "you",
        messege: `${inputUser}`,
        date: "03/06/2021",
        time: "19:39",
        repyly_to: "0",
      };

      const lastMessage = {
        sender: "you",
        messege: `${inputUser}`,
      };

      let newsChat = results.chats.map((item) => item);
      newsChat.push(newMessege);
      results.chats = newsChat;
      results.last_messege = lastMessage;
      results.last_chat_read = `${last_id + 1}`;
      console.log(results);
      setInputUser("");
    }

    // setDataSementara(dataSementara.chats.push(newMessege));
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
  }, []);

  return (
    <InboxDetailStyled>
      <UtilsInboxDetailHeader
        className='header'
        setDetailPage={setDetailPage}
        quicksMainHandler={quicksMainHandler}
        results={results}
      />

      {results.hasOwnProperty("chats") ? (
        <MessageComponent
          results={results}
          setResults={setResults}
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
            onChange={inputHandler}
            value={inputUser}
          />
          <div
            className='button text-14 text-color-white bg-primary'
            onClick={sendHandler}
          >
            Send
          </div>
        </div>
      </div>
    </InboxDetailStyled>
  );
};

const InboxDetailStyled = styled(motion.div)`
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
        cursor: pointer;
        width: fit-content;
        padding: 12px 16px;
        border-radius: 8px;
      }
    }
  }
`;

export default UtilsInboxDetail;
