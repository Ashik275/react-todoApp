import React, { useState } from 'react';
import './NewTodo.css';

const NewTodo = (props) => {
    const [todo,setTodo]=useState({title:'',desc:''});
    const handleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setTodo((oldTodo)=>{
            return {...oldTodo,[name]:value}
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        props.onAddTodo(todo);
        setTodo({title:'',desc:''});
        
    }
    return (
            <form className='form' onSubmit={handleSubmit}>
                <div className='form-field'>
                    <label htmlFor="">Title</label>
                    <input type="text" name="title" id="title" value={todo.title} onChange={handleChange} />
                </div>
                <div className='form-field'>
                    <label htmlFor="">Description</label>
                    <textarea type="text" name="desc" id="desc" value={todo.desc} onChange={handleChange} />
                </div>
                <button type='submit'>Add Todo</button>
            </form>
            
    );
};

export default NewTodo;