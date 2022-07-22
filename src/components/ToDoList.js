import React, { useState, } from 'react';
import ToDoForm from './ToDoForm';
import ToDo from './ToDo';

export default function ToDoList(){
    const [toDoArray, setToDoArray] = useState([]);

    const addToDoArray = task => {
        if(!task.taskName || /^\s*$/.test(task.taskName)){
            return
        }
        const newToDoArray = [task, ...toDoArray];
        setToDoArray(newToDoArray);
    }

    const completeToDo = id =>{
        let updateToDo = toDoArray.map(task => {
            if(task.id === id){
                task.isCompleted = !task.isCompleted;
            }
            return toDoArray;
        });
        setToDoArray(updateToDo);
    }

    return(
        <div className='class-ToDoList'>
            <h1>To Do List</h1>
            <ToDoForm onSubmit={addToDoArray}/>
            <ToDo toDoArray={toDoArray} completeToDo={completeToDo}/>
        </div>
    )
}