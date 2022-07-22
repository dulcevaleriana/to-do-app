import React, {useState} from 'react';
import ToDoForm from './ToDoForm';
import {GrFormEdit} from 'react-icons/gr';
import {RiCloseCircleLine} from 'react-icons/ri';
import {AiOutlineCheckCircle} from 'react-icons/ai';

export default function ToDo(props){
    const [editTask, setEditTask] = useState({
        id: null, 
        taskName: '',
    });

    const submitUpdate = task => {
        props.editTask(editTask.id,task);
        setEditTask({
            id: null,
            taskName: ''
        })
    }

    if(editTask.id){
        return <ToDoForm id={editTask.id} edit={editTask} setEditTask={setEditTask} onSubmit={submitUpdate}/>
    }

    return props.toDoArray.map((toDoItems, key) => (
        <div className={toDoItems.isCompleted === true ? "class-completed class-still" : "class-still"} key={key}>
            <div>
                {toDoItems.taskName}
            </div>
            <div>
                <GrFormEdit onClick={() => setEditTask({id:toDoItems.id,taskName:toDoItems.taskName})}/>
                <AiOutlineCheckCircle onClick={() => props.completeToDo(toDoItems.id)}/>
                <RiCloseCircleLine onClick={() => props.removeTask(toDoItems.id)}/> 
            </div>
        </div>
    ))
}