import {  useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './App.css';
import ListTask from './Components/ListTask/ListTaks';
import NewTaks from './Components/NewTask/NewTask';
import Title from './Components/Title/Title';
import {DATABASE} from './Database'


function App() {
   
    const [listTask ,setListTask] = useState(DATABASE)

    return (

    <div className = "container" >
        <Title  />
        <NewTaks list={listTask} setList={setListTask}/>
        <ListTask
            list={listTask}
            setList= {setListTask}
                  />
    </div>
    );
}

export default App;