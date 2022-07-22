import React, { useState, } from 'react';

export default function ToDoForm(props){
    const [inputListName, setInputListName] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            taskName: inputListName
        });

        setInputListName('');
    }

    return(
        <form className='class-ToDoForm' onSubmit={handleSubmit}>
            <input 
                type='text'
                placeholder='add your task here'
                value={inputListName}
                name='inputListName'
                onChange={e => setInputListName(e.target.value)}
            />
            <button>Add</button>
        </form>
    )
}