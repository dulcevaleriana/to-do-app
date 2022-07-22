import React, { useState, } from 'react';
import ToDoForm from './ToDoForm';

export default function ToDoList(){
    const [toDoArray, setToDoArray] = useState([]);

    const addToDoArray = task => {
        if(!task.taskName || /^\s*$/.test(task.taskName)){
            return
        }
        const newToDoArray = [task, ...toDoArray];
        setToDoArray(newToDoArray);
    }

    return(
        <div>
            <h1>To Do List</h1>
            <ToDoForm onSubmit={addToDoArray}/>
        </div>
    )
}