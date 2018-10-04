import React, { Component } from 'react';
import List from './List';
import TodoForm from './TodoForm';

class App extends Component {

  state = {todos: []}

  addItem = (taduh) => {
    const {todos} = this.state
    const herewego = {id: Math.random(), name: taduh, complete: false}
    this.setState({ todos: [...this.state.todos, herewego] })
  }

  handleCLick = id => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map( todo => {
        if (todo.id == id) {
          return {
            ...todo,
            complete: !todo.complete
          }
        }
      })
    })
  }

  render() {
    return (
      <div>
        <li>
        <TodoForm add Item={this.addItem} />
        <List
        name="Learning React with a List"
        items={this.state.todos}
        todoClick={this.handleClick}
        />
         </li>
      </div>
    );
  }
}

export default App;
