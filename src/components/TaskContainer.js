import React, { useEffect, useState } from "react";
import taskData from "../dummyData/task.json";
import styled from "styled-components";

import TaskHeader from "./TaskHeader";
import EachTaskComponent from "./EachTaskComponent";
import loading from "../images/svg-icon/loading.svg";
import NewTaskContainer from "./NewTaskContainer";

const TaskContainer = () => {
  const [dataResult, setDataResult] = useState(taskData.data);
  const [nowShowing, setNowShowing] = useState("All Task");
  const [dataFilter, setDataFilter] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [componentInput, setComponentInput] = useState([]);

  const saveToResult = (item) => {
    const newData = dataResult;
    newData[item.id - 1] = item;
    setDataResult(newData);
  };

  const saveNewTask = (item) => {
    const newData = item;
    setDataResult((prevItems) => [...prevItems, newData]);
  };

  const deleteTask = (deleteItem) => {
    setDataResult(dataResult.filter((item) => item.id !== deleteItem.id));
  };

  const addNewInput = () => {
    const newData = (
      <NewTaskContainer
        key={componentInput.length}
        idItem={componentInput.length}
        componentInput={componentInput}
        setComponentInput={setComponentInput}
        nowShowing={nowShowing}
        dataResult={dataResult}
        saveNewTask={saveNewTask}
      />
    );
    setComponentInput((prevItems) => [...prevItems, newData]);
    console.log(componentInput);
  };

  useEffect(() => {
    const filter = nowShowing === "All Task" ? "" : nowShowing;
    let data = dataResult.filter((item) => item.tag.includes(filter));
    data.sort((a, b) => {
      if (a.finished === "false" && b.finished !== "false") {
        return -1;
      } else if (b.finished === "false" && a.finished !== "false") {
        return 1;
      } else {
        return 0;
      }
    });
    setDataFilter(data);
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  }, [dataResult, nowShowing]);

  return (
    <TaskContainerStyled>
      <TaskHeader
        nowShowing={nowShowing}
        setNowShowing={setNowShowing}
        setIsLoading={setIsLoading}
        isLoading={isLoading}
        addNewInput={addNewInput}
      />

      {isLoading && (
        <div className='isLoading'>
          <img src={loading} alt={"loading-icon"} />
          <div className='text-color-2 text-14 '>Loading Tasks</div>
        </div>
      )}

      {componentInput.map((item) => item)}

      {!isLoading &&
        dataFilter.map((item) => (
          <EachTaskComponent
            key={item.id}
            item={item}
            saveToResult={saveToResult}
            deleteTask={deleteTask}
          />
        ))}

      {dataFilter.length === 0 && (
        <div className='text-14 text-color-2 no-data'>
          Tidak Ada Task Baru. Silahkan tambah task baru
        </div>
      )}
    </TaskContainerStyled>
  );
};

const TaskContainerStyled = styled.div`
  padding: 24px 32px;
  overflow-y: scroll;
  height: 737px;
  ::-webkit-scrollbar {
    width: 14px;
  }

  ::-webkit-scrollbar-thumb {
    border: 4px solid rgba(0, 0, 0, 0);
    background-clip: padding-box;
    border-radius: 9999px;
    background-color: #aaaaaa;
  }

  .isLoading {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img {
      width: 60px;
      height: 60px;
    }
  }

  .no-data {
    margin-top: 10px;
  }

  @media (max-width: 1513px) {
    height: 70vh;
  }

  @media (max-width: 577px) {
    height: 80vh;
  }
`;

export default TaskContainer;
