import React from "react";
import { deleteTaskClick, completeTaksClick } from "../../Utils/funtions";

import "./task.css";

const Task = ({ task, list, setList, index }) => {
  // dragupo
  function handleDragStart(evento, indice) {
    evento.dataTransfer.setData("indice", indice);
  }

  function handleDragEnter(evento) {
    evento.target.classList.add("hovered");
  }

  function handleDragLeave(evento) {
    evento.target.classList.remove("hovered");
  }

  function handleDrop(evento) {
    const indice = evento.dataTransfer.getData("indice");
    const self = evento.target.id;
    let copiaLista = [...list];
    const temp = copiaLista[indice];
    copiaLista[indice] = copiaLista[self];
    copiaLista[self] = temp;

      setList(copiaLista);
    evento.target.classList.remove("hovered");
  }

  return (
    <div
      className="task-item"
      style={task.completed ? { borderLeft: "6px solid #3066BE" } : {}}
      draggable={true}
      onDrop={handleDrop}
      onDragStart={(event) => handleDragStart(event, index)}
      onDragLeave={handleDragLeave}
      onDragOver={(event) => event.preventDefault()}
      onDragEnter={handleDragEnter}
      id={index}
    >
      <div
        className="task-title"
        onClick={() => completeTaksClick(task.id, list, setList)}
      >
        {task.title}
        {task.completed ? <span className="completed">- Completed</span> : ""}
      </div>
      <div
        className="deleteTask"
        onClick={() => deleteTaskClick(task.id, list, setList)}
      >
        X
      </div>
    </div>
  );
};

export default Task;
