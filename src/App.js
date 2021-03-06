import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

    state = {
      persons: [
        { name: "Max", age: 28 },
        { name: "Manu", age: 29 },
        { name: "Erica", age: 30 }
      ]
    }

    switchNameHandler = (newName) => {
      this.setState( {
        persons: [
          { name: newName, age: 28 },
          { name: "Manu", age: 29 },
          { name: "Erica", age: 31 }
        ]
      } )
    }

    namechangedHandler = (event) => {
      this.setState( {
        persons: [
          { name: 'Max', age: 28 },
          { name: event.target.value, age: 29 },
          { name: "Erica", age: 31 }
        ]
      } )
    }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>This is react app</h1>
        <p>This is really working!@!!!!</p>
        <button 
          style={ style }
          onClick={ () => this.switchNameHandler('Maximilian') }>Switch name</button>
        <Person 
          name={ this.state.persons[0].name } 
          age={ this.state.persons[0].age }/>
        <Person 
          name={ this.state.persons[1].name } 
          click={ this.switchNameHandler.bind(this, 'Max!') }
          age={ this.state.persons[1].age } 
          changed={ this.namechangedHandler }
        >Quiero Taco Bell</Person>
        <Person 
          name={ this.state.persons[2].name } 
          age={ this.state.persons[2].age }/>
      </div>
    );
  }
}

export default App;
