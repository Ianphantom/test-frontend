import React, { Fragment, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

// import icon
import down from "../images/svg-icon/down.svg";
import up from "../images/svg-icon/up.svg";
import more from "../images/svg-icon/more.svg";

const EachTaskComponent = ({ item, saveToResult, deleteTask }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isMoreClicked, setIsMoreClicked] = useState(false);
  const [descriptionValue, setDescriptiionValue] = useState("");
  const [finishedStatus, setFinishedStatus] = useState(item.finished);
  const [dateValue, setDateValue] = useState(item.deadline);

  const [tagHave, setTagHave] = useState(item.tagList);
  const [tagIsClicked, setTagIsClicked] = useState(false);

  const textAreaInput = useRef(null);

  const descriptionHandler = (e) => {
    setDescriptiionValue(e.target.value);
  };

  const dateHandler = (e) => {
    setDateValue(e.target.value);
  };

  const saveNewDate = () => {
    const newData = {
      ...item,
      deadline: dateValue,
    };
    console.log(dateValue);
    saveToResult(newData);
  };

  const saveDescriptionValue = () => {
    const textAreaValue = textAreaInput.current.value;
    let newText;
    if (descriptionValue === "") {
      if (textAreaValue === "") {
        newText = "No Description";
      } else {
        newText = textAreaValue;
      }
    } else {
      newText = descriptionValue;
    }
    const newData = {
      ...item,
      notes: newText,
    };

    saveToResult(newData);
  };

  // di hardcode dulu
  const currentDate = new Date("06/10/2021");

  const clickHandler = () => {
    setIsClicked(!isClicked);
  };

  const setMoreHandler = () => {
    setIsMoreClicked(!isMoreClicked);
  };

  const refactorDate = (deadline) => {
    const deeadlineData = deadline.split("-");
    // console.log(deeadlineData);
    const deeadlineDate = new Date(
      `${deeadlineData[1]}/${deeadlineData[2]}/${deeadlineData[0]}`
    );
    return deeadlineDate;
  };

  const countDown = (deadline) => {
    const deadlineDate = refactorDate(deadline);
    // console.log(deadlineDate.getDate());
    const daysLeft =
      (deadlineDate.getTime() - currentDate.getTime()) / (1000 * 3600 * 24);

    return (
      <div className='countdown text-color-4'>{`${daysLeft} Day Left`}</div>
    );
  };

  const getDeadline = (deadline) => {
    const deadlineDate = refactorDate(deadline);
    const constructDate = `${deadlineDate.getDate()}/${
      deadlineDate.getMonth() + 1
    }/${deadlineDate.getFullYear()}`;
    return <div className='date'>{constructDate}</div>;
  };

  const checkBoxHandler = (e) => {
    const isChecked = e.target.checked;
    // console.log(isChecked.toString());
    setFinishedStatus(isChecked.toString());
  };

  const updateData = () => {
    const newData = {
      ...item,
      finished: finishedStatus,
    };

    saveToResult(newData);
  };

  const renderAllTag = (tagList) => {
    const data = tagList.map((item) => (
      <div
        key={item}
        className={`${item.toLowerCase()} each-tag text-14 text-color-2 text-bold`}
      >
        {item}
      </div>
    ));
    return data;
  };

  const addNewTagHandler = (tagTitle) => {
    if (!tagHave.includes(tagTitle)) {
      setTagHave((previtem) => [...previtem, tagTitle]);
    }
    // refactorNewTag();
  };

  useEffect(() => {
    if (item.finished !== "true") {
      setIsClicked(true);
    }
    const refactorNewTag = () => {
      const newData = {
        ...item,
        tagList: tagHave,
      };
      // console.log(newData);
      saveToResult(newData);
    };
    refactorNewTag();
  }, [item, tagHave, saveToResult]);
  return (
    <EachTaskStyled
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
    >
      <div className='checkboxContainer'>
        <input
          type='checkbox'
          name='finished'
          id='finished'
          onChange={checkBoxHandler}
          defaultChecked={finishedStatus === "true" ? true : false}
          onBlur={updateData}
        />
      </div>
      <div className='right'>
        <div className='header'>
          <div className='left'>
            <div
              className={`title text text-14 text-bold ${
                finishedStatus === "true" ? "finished" : ""
              }`}
            >
              {item.title}
            </div>
          </div>
          <div className='right-header text-14'>
            {item.finished === "false" && (
              <React.Fragment>{countDown(dateValue)}</React.Fragment>
            )}
            <React.Fragment>{getDeadline(dateValue)}</React.Fragment>
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
                  onBlur={saveNewDate}
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
                  onClick={() => deleteTask(item)}
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
                    fill='#2F80ED'
                  />
                </svg>

                <input
                  type='date'
                  name='date-deadline'
                  className='text-14 text-color-2 text-bold'
                  id='id'
                  defaultValue={item.deadline}
                  onChange={dateHandler}
                  onBlur={saveNewDate}
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
                    fill='#2F80ED'
                  />
                </svg>

                <textarea
                  ref={textAreaInput}
                  rows={3}
                  className='text-14 text-color-2'
                  defaultValue={item.notes}
                  onBlur={saveDescriptionValue}
                  onChange={descriptionHandler}
                />
              </div>
              <div className='tag'>
                <div className='tag-icon'>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    onClick={() => setTagIsClicked(!tagIsClicked)}
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M15.4032 0.833374H7.52334C6.65742 0.833374 5.95681 1.58337 5.95681 2.50004H13.8288C14.6947 2.50004 15.4032 3.25004 15.4032 4.16671V15L16.9776 15.8334V2.50004C16.9776 1.58337 16.2691 0.833374 15.4032 0.833374ZM12.2545 5.83337V16.6417L8.94038 15.1334L8.31849 14.85L7.69661 15.1334L4.38249 16.6417V5.83337H12.2545ZM4.38245 4.16671H12.2545C13.1204 4.16671 13.8289 4.91671 13.8289 5.83337V19.1667L8.31845 16.6667L2.80804 19.1667V5.83337C2.80804 4.91671 3.51653 4.16671 4.38245 4.16671Z'
                      fill={tagHave.length > 0 ? "#2F80ED" : "#828282"}
                    />
                  </svg>
                  {tagIsClicked && (
                    <div className='allTagContainer bg-light'>
                      <div
                        className='important tag-list-item'
                        onClick={() => addNewTagHandler("Important ASAP")}
                        onBlur={() => console.log("heheheh")}
                      >
                        Important ASAP
                      </div>
                      <div
                        className='offline tag-list-item'
                        onClick={() => addNewTagHandler("Offline Meeting")}
                      >
                        Offline Meeting
                      </div>
                      <div
                        className='virtual tag-list-item'
                        onClick={() => addNewTagHandler("Virtual Meeting")}
                      >
                        Virtual Meeting
                      </div>
                      <div
                        className='asap tag-list-item'
                        onClick={() => addNewTagHandler("ASAP")}
                      >
                        ASAP
                      </div>
                      <div
                        className='client tag-list-item'
                        onClick={() => addNewTagHandler("Client Related")}
                      >
                        Client Related
                      </div>
                      <div
                        className='self tag-list-item'
                        onClick={() => addNewTagHandler("Self Task")}
                      >
                        {" "}
                        Self Task
                      </div>
                      <div
                        className='appointments tag-list-item'
                        onClick={() => addNewTagHandler("Appointments")}
                      >
                        Appointments
                      </div>
                      <div
                        className='court tag-list-item'
                        onClick={() => addNewTagHandler("Court Related")}
                      >
                        Court Related
                      </div>
                    </div>
                  )}
                </div>

                <div className='tag-container'>
                  <React.Fragment>{renderAllTag(tagHave)}</React.Fragment>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </EachTaskStyled>
  );
};

const EachTaskStyled = styled(motion.div)`
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
          &.finished {
            color: #828282;
            text-decoration: line-through;
          }
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

    .tag {
      display: flex;
      gap: 18px;
      margin-top: 15px;

      .tag-container {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
      }

      .tag-icon {
        position: relative;
        svg {
          cursor: pointer;
        }
        .allTagContainer {
          display: flex;
          flex-direction: column;
          gap: 10px;
          .tag-list-item {
            width: 246px;
            cursor: pointer;
            padding: 8px 14px;
            border-radius: 5px;
          }
          position: absolute;
          z-index: 4;
          padding: 14px 16px;
          border: 1px solid #828282;
          border-radius: 5px;
        }
      }

      .each-tag {
        padding: 8px 12px;
        border-radius: 5px;
      }
      .item-select {
        cursor: pointer;
      }

      .important {
        background: #e5f1ff;
      }

      .offline {
        background: #fdcfa4;
      }

      .virtual {
        background: #f9e9c3;
      }

      .asap {
        background: #afebdb;
      }

      .client {
        background: #cbf1c2;
      }
      .self {
        background: #cfcef9;
      }

      .appointments {
        background: #f9e0fd;
      }

      .court {
        background: #9dd0ed;
      }
    }
  }
`;

export default EachTaskComponent;
