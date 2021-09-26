import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './App.css';

import ListTask from './Components/ListTaks';
import NewTaks from './Components/NewTask';
import Title from './Components/Title';




function App() {
    const [listTask ,setListTask] = useState([{
        title: 'Comer',
        completed: false,
    id: uuidv4()},{
        title: 'Dormir',
        completed: true,
    id: uuidv4()} ,{
        title: 'Sair',
        completed: false,
    id: uuidv4()},{
        title: 'Trabalhar',
        completed: false,
    id: uuidv4()},{
        title: 'Trabalhar',
        completed: false,
    id: uuidv4()}])


    const additionNewTask = (titleTask)=>{
    
        const newTask = [...listTask,{
            title: titleTask,
            completed: false,
            id: uuidv4()
        }]
        setListTask(newTask)
    }

    const completeTaksClick = (idTask)=>{
        const newTask = listTask.map(task => {
            if (task.id === idTask) return {...task, completed: !task.completed}
            return task
        })
        setListTask(newTask)
            
        
    }

    const deleteTaskClick = (idTask)=>{
        const newTask = listTask.filter(taks => taks.id !== idTask)
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