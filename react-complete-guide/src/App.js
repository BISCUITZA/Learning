import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {

  state = {
    persons: [
      { name: 'Max', age: 21 },
      { name: 'Susan', age: 31 },
      { name: 'George', age: 71 }
    ]
  }

  switchNameHandler = () =>{

  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react App </h1>
        <button onClick={this.switchNameHandler}> Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
      </div>
    );
  }
}

export default App;
