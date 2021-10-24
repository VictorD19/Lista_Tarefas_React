import React, { useState } from 'react';

import './nwtask.css'
import Button from'../Button/Button'
import {additionNewTask} from '../../Utils/funtions'

const NewTaks = ({list,setList}) => {
   
    const [valueInput,setValue] = useState("")

    const listenerValue = (e)=>{
        setValue(e.target.value)
    }

    const handlersetTask = ()=>{
        additionNewTask(valueInput,list,setList)
         setValue('')
        
    }

    return ( 
    <div className="task-container">
      
       < input onChange={listenerValue} className="task-input" value={valueInput} type="text" id="Task"/> 
      
      <div className="add-task-container">
           <Button text="Adicionar" onclick={handlersetTask}/>
       </div>
    </div> );
}
 
export default NewTaks;