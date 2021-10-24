import React from 'react';

import './listTask.css'
import Task from'../Task/Task'

// import Task from './Task';

export default function ListTask({list,statusTask,deleteTask}){


    return (
        <div className="List-container">
        {/* {list.map((task,id) =><Task key={id} task={task} />)} */}
        {list.length > 0 && list.map((task) =><Task task={task} 
                                 key={task.id} 
                                 statusTask={statusTask} 
                                 deleteTask={deleteTask}
                            />
        )}
        {list.length <= 0 && <h2 className="item-not-found">Sem Tarefas Disponiveis</h2> }
        </div>
     

        

    )
}