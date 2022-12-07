import React, { useState } from 'react';
import {v4 as uuidv4} from "uuid"; 
import Todos from './Todos';
import './Home.css'
import NewTodo from './NewTodo';

const Home = () => {
    const [todos,setTodos]=useState([]);

    const handletodo=(todo)=>{
        setTodos((prevTodo)=>{
            return [...prevTodo,{id:uuidv4(),todo}]
        });
    }

    const handleRemove=(id)=>{
        
        setTodos((previousTodos)=>{
            const filterTodos=previousTodos.filter((todo)=>todo.id!==id);
            return filterTodos;
        });
       
    }
    return (
        <div className='container'>
            <h3 style={{color:'white'}}>Todo App</h3>
            <NewTodo onAddTodo={handletodo}/>
            <Todos todos={todos} onRemoveTodo={handleRemove}/>
        </div>
    );
};

export default Home;