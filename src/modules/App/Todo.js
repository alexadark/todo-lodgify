import React from 'react';


export const Todo = ({ text, onClickDelete }) => {
  return (
    <div className="todo-item">
      {text}
      <span onClick={onClickDelete}>&times;</span>
    </div>
  );
}

