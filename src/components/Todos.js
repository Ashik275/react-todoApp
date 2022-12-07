import React from 'react';
import Todo from './Todo';
import './Todos.css';

const Todos = (props) => {
    const todos=props.todos;
    console.log(props.todos);
    return (
        <section className='todos'>
            {
                todos.map(todo=><Todo key={todo.id} todo={todo.todo} id={todo.id} onRemoveTodo={props.onRemoveTodo}/>)
            }
        </section>
    );
};

export default Todos;