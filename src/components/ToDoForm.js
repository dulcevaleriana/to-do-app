import React, { useState, useEffect, useRef } from 'react';

export default function ToDoForm(props){
    const [inputListName, setInputListName] = useState('');
    const inputRef = useRef(null);

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            taskName: props.edit ? props.edit.taskName : inputListName
        });

        setInputListName('');
    }

    useEffect(() => {
        inputRef.current.focus();
    })

    return(
        <form className='class-ToDoForm' onSubmit={handleSubmit}>
            <input 
                type='text'
                placeholder='add your task here'
                value={props.edit ? props.edit.taskName : inputListName}
                name='inputListName'
                onChange={e => props.edit ? props.setEditTask({ id:props.id , taskName:e.target.value}) : setInputListName(e.target.value)}
                ref={inputRef}
            />
            <button>Add</button>
        </form>
    )
}