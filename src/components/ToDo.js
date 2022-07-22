import React, {useState} from 'react';
import {GrFormEdit} from 'react-icons/gr';
import {RiCloseCircleLine} from 'react-icons/ri';
import {AiOutlineCheckCircle} from 'react-icons/ai';

export default function ToDo(props){
    const [editTask, setEditTask] = useState({
        id: null, 
        taskName: '',
    })

    return props.toDoArray.map((toDoItems, key) => (
        <div className={toDoItems.isCompleted === true ? "class-completed" : "class-still"} key={key}>
            <div>
                {toDoItems.taskName}
            </div>
            <div>
                <GrFormEdit onClick={() => props.editTask(toDoItems.id)}/>
                <AiOutlineCheckCircle onClick={() => props.completeToDo(toDoItems.id)}/>
                <RiCloseCircleLine onClick={() => props.removeTask(toDoItems.id)}/> 
            </div>
        </div>
    ))
}