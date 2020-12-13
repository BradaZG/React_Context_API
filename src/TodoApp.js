import React from 'react';
import './TodoApp.css';
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';

import TodoState from './context/TodoState';

const TodoApp = () => {
  return (
    <div className='TodoApp'>
      <div className='TodoApp__todoApp'>
        <TodoState>
          <TodoInput />
          <TodoList />
        </TodoState>
      </div>
    </div>
  );
};

export default TodoApp;
