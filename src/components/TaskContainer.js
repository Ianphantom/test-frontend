import React, { useState } from "react";
import taskData from "../dummyData/task.json";
import styled from "styled-components";

import TaskHeader from "./TaskHeader";
import EachTaskComponent from "./EachTaskComponent";

const TaskContainer = () => {
  const [dataResult, setDataResult] = useState(taskData.data);
  const [nowShowing, setNowShowing] = useState("All Task");
  console.log(nowShowing);
  return (
    <TaskContainerStyled>
      <TaskHeader nowShowing={nowShowing} setNowShowing={setNowShowing} />
      {dataResult.map((item) => (
        <EachTaskComponent key={item.id} item={item} />
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
`;

export default TaskContainer;
