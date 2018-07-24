import React, { Component as ReactComponent } from 'react';
import { uniqueId } from 'lodash';

import { Todo } from '/';
import Input from './Input';

export class Component extends ReactComponent {

  state = {
    comment: 'Add your first todo',
    todo: '',
    todos: []
  }

  handleChange = event => this.setState({ todo: event.target.value });

  handleClickAdd = () => {
    const { todo, todos } = this.state;
    todo && this.setState({
      todos: [...todos, { text: todo, id: uniqueId() }],
      todo: ''
    });
  };

  handleClickDelete = index => {
    const { todos } = this.state;
    this.setState({ todos: [
      ...todos.slice(0, index),
      ...todos.slice(index + 1)
    ]});
    todos.length === 1 && this.setState({ comment: 'You\'re all done 🌴' })
  }

  render() {
   
    const {todos, comment } = this.state;
    return (
      <div className="todo-list">
        <h1>todos</h1>
        <p><span id="counter">{todos.length}</span> remaining</p>
        <div>
          {
            todos.length
              ? todos.map((todo, index) => 
              <Todo key={todo.id} 
              onClickDelete={() => this.handleClickDelete(index)} 
              text={todo.text} />)
              : comment
          }
        </div>
      <Input
      onWriteTask={this.handleChange}
      onClickAdd={this.handleClickAdd}
      />
      </div>
    )
  }

}
