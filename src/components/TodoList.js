import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../TodoContext';
import Todoitem from './Todoitem';



const TodoListBlock = styled.div`
    padding:20px 32px;
    overflow-y: auto;
    flex : 1;    
`
const TodoList = () => {
    const todos = useTodoState();
    return (
    <TodoListBlock>
        {todos.map(todo =><Todoitem key={todo.id} id={todo.id} text={todo.text} done={todo.done}></Todoitem>)}
    </TodoListBlock>
    );
};

export default TodoList;