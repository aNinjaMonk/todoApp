import logo from './logo.svg';
import './App.css';

import React from 'react';

//<h4>{this.props.title}</h4>

class Index extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todo: '',
      todos: []
    }

  }

  addTodo = (event) => {
    event.preventDefault();
    var mytodos = this.state.todos;
    mytodos.push(this.state.todo);
    this.setState({
      todos: mytodos
    });
    console.log(this.state.todos);
  }

  render(){
    return (
      <div className="App">
        <form className="textInput" onSubmit={this.addTodo}>
          <input
            type="text"
            name="name"
            onChange={(event) => {
              this.setState({
                todo: event.target.value
              });
            }
          }/> &nbsp;&nbsp;
          <input type="submit" value="Add" />
        </form>
        <div className="todoList">
          <ul>
            {this.state.todos.map((todo) => <li>{todo}</li>)}
          </ul>
        </div>
      </div>
    );
  }
}

export default Index;
