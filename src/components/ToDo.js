import React, {useState} from 'react';
import {GrFormEdit} from 'react-icons/gr';
import {RiCloseCircleLine} from 'react-icons/ri';

export default function ToDo(props){
    const [editTask, setEditTask] = useState({
        id: null, 
        taskName: '',
    })

    return props.toDoArray.map((toDoItems, key) => (
        <div className={toDoItems.isCompleted ? "class-completed" : "class-still"} key={key}>
            <div key={toDoItems.id} onClick={() => props.completeToDo(toDoItems.id)}>
                {toDoItems.taskName}
            </div>
            <div>
                <GrFormEdit/>
                <RiCloseCircleLine/> 
            </div>
        </div>
    ))
}