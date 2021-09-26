import React from 'react';

import './listTask.css'
import Task from'./Task'

// import Task from './Task';

export default function ListTask({list,statusTask,deleteTask}){


    return (
        <div className="List-container">
        {/* {list.map((task,id) =><Task key={id} task={task} />)} */}
        {list.map((task) =><Task task={task} 
                                 key={task.id} 
                                 statusTask={statusTask} 
                                 deleteTask={deleteTask}
                            />
        )}
        </div>
     

        

    )
}