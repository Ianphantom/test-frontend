import React, { useEffect, useState } from "react";
import styled from "styled-components";

// import component
import UtilsInboxDetailHeader from "./UtilsInboxDetailHeader";
import MessageComponent from "./MessageComponent";
import { motion } from "framer-motion";

import loading from "../images/svg-icon/loading.svg";

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
  const [replyChat, setReplyChat] = useState("");

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
        reply_to: replyChat.messege,
      };

      console.log(newMessege);

      const lastMessage = {
        sender: "you",
        messege: `${inputUser}`,
      };

      let newsChat = results.chats.map((item) => item);
      newsChat.push(newMessege);
      results.chats = newsChat;
      results.last_messege = lastMessage;
      results.last_chat_read = `${last_id + 1}`;
      setInputUser("");
      setReplyChat("");
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

      {results.hasOwnProperty("chats") && (
        <MessageComponent
          results={results}
          setResults={setResults}
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          setReplyChat={setReplyChat}
        />
      )}

      <div className='replyContainer'>
        {isVisible === false && (
          <div
            className='new-messege-alert text-16 text-regular text-color-primary'
            onClick={scrollHandler}
          >
            <div className='text'>New Messege</div>
          </div>
        )}

        {results.hasOwnProperty("waitConnection") &&
          results.waitConnection === "true" && (
            <div className='waiting-connection'>
              <div className='information'>
                <div>
                  <img src={loading} alt='Loading-icon' />
                </div>
                <div className='text-14 text-color-2'>
                  Please wait while we connect you with one of our team..
                </div>
              </div>
            </div>
          )}

        <div className='reply bg-light'>
          <div className='reply-container'>
            {replyChat.hasOwnProperty("id_message") && (
              <div className='reply-chat'>
                <div className='left'>
                  <div className='text-14 text-bold'>
                    {`Replying to ${replyChat.sender}`}
                  </div>
                  <div className='text-14'>{replyChat.messege}</div>
                </div>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 12 12'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  onClick={() => setReplyChat("")}
                >
                  <path
                    d='M12 1.20857L10.7914 0L6 4.79143L1.20857 0L0 1.20857L4.79143 6L0 10.7914L1.20857 12L6 7.20857L10.7914 12L12 10.7914L7.20857 6L12 1.20857Z'
                    fill='#4F4F4F'
                  />
                </svg>
              </div>
            )}

            <input
              className='text-14'
              type='text'
              placeholder='Type a new message'
              onChange={inputHandler}
              value={inputUser}
            />
          </div>

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
      align-items: flex-end;
      gap: 13px;
      .reply-container {
        width: 100%;
        svg {
          cursor: pointer;
        }
      }
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

      .reply-chat {
        display: flex;
        gap: 25px;
        padding: 12px 16px;
        background: #f2f2f2;
        justify-content: space-between;
        border: 1px solid #828282;
      }
    }

    .waiting-connection {
      padding: 5px 32px;

      .information {
        display: flex;
        gap: 10px;
        align-items: center;
        padding: 10px 10px;
        background: #e9f3ff;
        border-radius: 5px;
        img {
          width: 35px;
          height: 35px;
        }
      }
    }
  }

  @media (max-width: 1513px) {
    height: 70vh;
  }

  @media (max-width: 800px) {
    height: 80vh;
  }
`;

export default UtilsInboxDetail;
