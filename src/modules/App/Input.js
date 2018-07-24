import React from 'react';

export const Input = ({todo, onWriteTask,onClickAdd}) => {
    return (
        <div className="todo-input">
            <input
                onChange={onWriteTask}
                placeholder="..."
                type="text"
                value={todo} />
            <button onClick={onClickAdd}>Add</button>
        </div>
    );
};

export default Input;