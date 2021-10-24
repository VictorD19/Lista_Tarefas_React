    // Save list localStoage
    const setListLocalStoage = (task) =>{
        localStorage.setItem('list-items',JSON.stringify(task))
    }

    // add item to list
    const additionNewTask = (titleTask,lista,setList)=>{
    
        const newTask = [...lista,{
            title: titleTask,
            completed: false,
            id: Math.random()
        }]
        setListLocalStoage(newTask)
        setList(newTask)
    }

    // completed status list
    const completeTaksClick = (idTask,lista,setList)=>{
        const newTask = lista.map(task => {
            if (task.id === idTask) return {...task, completed: !task.completed}
            return task
        })
        setListLocalStoage(newTask)
        setList(newTask)
            
        
    }

    // delete item list
    const deleteTaskClick = (idTask,lista,setList)=>{
        const newTask = lista.filter(taks => taks.id !== idTask)
        setListLocalStoage(newTask)
        setList(newTask)
    }

    export {
        deleteTaskClick,
        completeTaksClick,
        additionNewTask
    }