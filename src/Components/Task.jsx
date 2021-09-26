import React from 'react';

import './task.css'

const Task = ({task,statusTask,deleteTask}) => {

    return (<div className="task-item" 
                style={task.completed ? {borderLeft: "6px solid #3066BE"} : {}}>
        <div className="task-title" onClick={()=> statusTask(task.id)}>
        {task.title}
        </div>
        <div className="deleteTask" onClick={()=> deleteTask(task.id)}>
                X
        </div>
        </div> );
}
 
export default Task;