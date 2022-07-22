import React, { useState, } from 'react';
import ToDoForm from './ToDoForm';

export default function ToDoList(){
    const [toDoArray, setToDoArray] = useState([]);

    const addToDoArray = task => {
        
    }

    return(
        <div>
            <h1>To Do List</h1>
            <ToDoForm />
        </div>
    )
}