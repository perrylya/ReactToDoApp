import React from 'react';
import ReactDOM from 'react-dom';

let dummyData = ['Eat', 'Sleep', 'Poop', 'Repeat']

class ToDoApp extends React.Component {
  render() {
    return (
      <div>
        <InputLine />
        <ToDoList />
      </div>
    )
  }
}

class InputLine extends React.Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="Enter task here"></input>
        <button>Add todo</button>
      </div>
    )
  }
}

class ToDoList extends React.Component {
  render() {
    return (
      <ul>
        {dummyData.map((task) => <ToDo task={task} />)}
      </ul>
    )
  }
}

class ToDo extends React.Component {
  render() {
    return(
      <li><button>X</button>{this.props.task}</li>
    )
  }
}

ReactDOM.render(<ToDoApp />,
   document.getElementById('root'));
