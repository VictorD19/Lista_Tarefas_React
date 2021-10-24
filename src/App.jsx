import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './App.css';
import ListTask from './Components/ListTask/ListTaks';
import NewTaks from './Components/NewTask/NewTask';
import Title from './Components/Title/Title';

const list = JSON.parse(localStorage.getItem('list-items'))|| []


function App() {
    const [listTask ,setListTask] = useState(list)


    // Save list localStoage
    const setListLocalStoage = (task) =>{
        localStorage.setItem('list-items',JSON.stringify(task))
    }

    // add item to list
    const additionNewTask = (titleTask)=>{
    
        const newTask = [...listTask,{
            title: titleTask,
            completed: false,
            id: uuidv4()
        }]
        setListLocalStoage(newTask)
        setListTask(newTask)
    }

    // completed status list
    const completeTaksClick = (idTask)=>{
        const newTask = listTask.map(task => {
            if (task.id === idTask) return {...task, completed: !task.completed}
            return task
        })
        setListLocalStoage(newTask)

        setListTask(newTask)
            
        
    }

    // delete item list
    const deleteTaskClick = (idTask)=>{
        const newTask = listTask.filter(taks => taks.id !== idTask)
        setListLocalStoage(newTask)
        setListTask(newTask)
    }


    return (

    <div className = "container" >
        <Title  />
        <NewTaks addTask={additionNewTask}/>
        <ListTask list={listTask} 
                  statusTask={completeTaksClick}
                  deleteTask={deleteTaskClick}
                  />
    </div>
    );
}

export default App;