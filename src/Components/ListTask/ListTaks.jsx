import React from "react";

import "./listTask.css";
import Task from "../Task/Task";
// import Task from './Task';

export default function ListTask({ list,setList }) {
  return (
    <div className="List-container">
      {list.length > 0 &&
        list.map((task,index) => <Task list={list} setList={setList} task={task} index={index} key={task.id} />)}
      {list.length <= 0 && (
        <h2 className="item-not-found">Sem Tarefas Disponiveis</h2>
      )}
    </div>
  );
}
