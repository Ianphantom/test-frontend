import React, { useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

// import icon
import down from "../images/svg-icon/down.svg";
import up from "../images/svg-icon/up.svg";
import more from "../images/svg-icon/more.svg";

const NewTaskContainer = ({
  idItem,
  componentInput,
  setComponentInput,
  nowShowing,
  dataResult,
  saveNewTask,
}) => {
  const [isClicked, setIsClicked] = useState(true);
  const [isMoreClicked, setIsMoreClicked] = useState(false);
  const [descriptionValue, setDescriptiionValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [titleValue, setTitleValue] = useState("");

  const deleteNew = () => {
    const newData = componentInput.filter((item) => item.idItem !== idItem);
    setComponentInput(newData);
  };

  const dateHandler = (e) => {
    setDateValue(e.target.value);
  };

  const descriptionHandler = (e) => {
    setDescriptiionValue(e.target.value);
  };

  const titleHandler = (e) => {
    setTitleValue(e.target.value);
  };

  const saveNewData = () => {
    if (titleValue === "" || dateValue === "")
      return alert("Harap mengisi semua data dengan benar");

    if (descriptionValue === "") setDescriptiionValue("No Description");
    const tag = nowShowing === "All Task" ? "Urgent To-Do" : nowShowing;

    const newData = {
      id: dataResult.length + 1,
      tag: tag,
      finished: "false",
      title: titleValue,
      deadline: dateValue,
      notes: descriptionValue,
      tagList: [],
    };
    console.log(newData);
    saveNewTask(newData);
    deleteNew();
  };

  const clickHandler = () => {
    setIsClicked(!isClicked);
  };

  const setMoreHandler = () => {
    setIsMoreClicked(!isMoreClicked);
  };

  return (
    <NewTaskContainerStyled
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
    >
      <div className='checkboxContainer'>
        <input type='checkbox' name='finished' id='finished' required={true} />
      </div>
      <div className='right'>
        <div className='header'>
          <div className='left'>
            <div className={` text text-14 text-regular text-color-2`}>
              <input
                className='title'
                type='text'
                placeholder='Type Task Title'
                onChange={titleHandler}
              />
            </div>
          </div>
          <div className='right-header text-14'>
            <div className='toogleContainer'>
              {isClicked && (
                <img
                  className='button-toggle'
                  src={up}
                  alt='detail-icon'
                  onClick={clickHandler}
                />
              )}
              {!isClicked && (
                <img
                  className='button-toggle'
                  src={down}
                  alt={"detail-icon"}
                  onClick={clickHandler}
                />
              )}
            </div>
            <div className='more-container'>
              <div className='more' onClick={setMoreHandler}>
                <img src={more} alt='more-icon' />
              </div>
              {isMoreClicked && (
                <div
                  className=' delete text-16 text-color-4 bg-light'
                  onClick={deleteNew}
                >
                  Delete
                </div>
              )}
            </div>
          </div>
        </div>
        <AnimatePresence>
          {isClicked && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className='detail'
            >
              <div className='time'>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M9.99181 1.66663C5.39181 1.66663 1.66681 5.39996 1.66681 9.99996C1.66681 14.6 5.39181 18.3333 9.99181 18.3333C14.6001 18.3333 18.3335 14.6 18.3335 9.99996C18.3335 5.39996 14.6001 1.66663 9.99181 1.66663ZM10.0003 16.6666C6.31697 16.6666 3.33364 13.6833 3.33364 9.99996C3.33364 6.31662 6.31697 3.33329 10.0003 3.33329C13.6836 3.33329 16.667 6.31662 16.667 9.99996C16.667 13.6833 13.6836 16.6666 10.0003 16.6666ZM9.16681 5.83329H10.4168V10.2083L14.1668 12.4333L13.5418 13.4583L9.16681 10.8333V5.83329Z'
                    fill={dateValue === "" ? "#828282" : "#2F80ED"}
                  />
                </svg>

                <input
                  type='date'
                  name='date-deadline'
                  className='text-14 text-color-2 text-bold'
                  id='id'
                  defaultValue={"0000/00/00"}
                  onChange={dateHandler}
                />
              </div>
              <div className='description'>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M14.7149 2.5C14.5066 2.5 14.29 2.58332 14.1317 2.74164L12.6069 4.26644L15.7315 7.39103L17.2563 5.86623C17.5812 5.54127 17.5812 5.01634 17.2563 4.69138L15.3065 2.74164C15.1399 2.57499 14.9316 2.5 14.7149 2.5ZM11.7155 7.51602L12.482 8.28259L4.93302 15.8316H4.16645V15.065L11.7155 7.51602ZM2.5 14.3735L11.7155 5.15799L14.8401 8.28259L5.6246 17.4981H2.5V14.3735Z'
                    fill={descriptionValue === "" ? "#828282" : "#2F80ED"}
                  />
                </svg>

                <textarea
                  rows={3}
                  className='text-14 text-color-2'
                  defaultValue={"No description"}
                  onChange={descriptionHandler}
                />
              </div>
              <div className='button-save'>
                <div
                  className='text bg-primary text-color-white'
                  onClick={saveNewData}
                >
                  Save
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </NewTaskContainerStyled>
  );
};

const NewTaskContainerStyled = styled(motion.div)`
  padding: 22px 0px;
  display: flex;
  border-bottom: 1px solid #828282;
  .checkboxContainer {
    width: 5%;
    align-self: flex-start;
  }

  .button-toggle {
    cursor: pointer;
  }

  .right {
    width: 100%;
    .header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      width: 100%;
      gap: 40px;
      .left {
        display: flex;
        align-items: center;
        .title {
          width: 380px;
          padding: 12px 14px;
          border: none;
          border-radius: 5px;
          border: 1px solid #828282;
        }
      }

      .right-header {
        white-space: nowrap;
        width: fit-content;
        display: flex;
        gap: 15px;
        align-items: center;

        .more-container {
          position: relative;
          cursor: pointer;

          .delete {
            margin-top: 3px;
            position: absolute;
            right: 0;
            padding: 15px 62px 15px 18px;
            border: 1px solid #828282;
            border-radius: 5px;
          }
        }
      }
    }

    .detail {
      margin-top: 16px;
      .time {
        display: flex;
        gap: 18px;
        align-items: center;
        input[type="date"] {
          width: 193px;
          padding: 10px 12px;
          border-radius: 5px;
          border: none;
          border: 1px solid #828282;
        }
        margin-bottom: 13px;
      }
    }

    .description {
      display: flex;
      gap: 18px;

      textarea {
        width: 100%;
        border: none;
        resize: none;
      }
    }

    .button-save {
      margin-top: 15px;
      .text {
        cursor: pointer;
        padding: 12px 30px;
        width: fit-content;
        border-radius: 5px;
      }
    }
  }
`;

export default NewTaskContainer;
