import React, { useEffect, useState } from "react";
import taskData from "../dummyData/task.json";
import styled from "styled-components";

import TaskHeader from "./TaskHeader";
import EachTaskComponent from "./EachTaskComponent";
import loading from "../images/svg-icon/loading.svg";

const TaskContainer = () => {
  const [dataResult, setDataResult] = useState(taskData.data);
  const [nowShowing, setNowShowing] = useState("All Task");
  const [dataFilter, setDataFilter] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const saveToResult = (item) => {
    const newData = dataResult;
    newData[item.id - 1] = item;
    setDataResult(newData);
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
      />

      {isLoading && (
        <div className='isLoading'>
          <img src={loading} alt={"loading-icon"} />
          <div className='text-color-2 text-14 '>Loading Tasks</div>
        </div>
      )}
      {!isLoading &&
        dataFilter.map((item) => (
          <EachTaskComponent
            key={item.id}
            item={item}
            saveToResult={saveToResult}
          />
        ))}
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
`;

export default TaskContainer;
