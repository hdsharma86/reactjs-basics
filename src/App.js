import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {id:'dfsfs1', name: 'Hardev', age: 32},
      {id:'dfsfs2', name: 'Madhu', age: 27},
      {id:'dfsfs3', name: 'Viren', age: 4}
    ],
    showPersons: false
  }

  changeStateHandler = () => {
    this.setState({
      persons : [
        {name: 'New Name', age: 33},
        {name: 'New Name 2', age: 26},
        {name: 'New Name 3', age: 3}
      ]
    })
  }

  nameChangeHandler = (event, personId) => {
    console.log(personId);
    const personIndex = this.state.persons.findIndex((person) => {
      return person.id === personId;
    });
    
    const person = {...this.state.persons[personIndex]};  
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});

  }

  togglePersonsHandler = () => {
    const showPersons = this.state.showPersons;
    this.setState({
      showPersons: !showPersons
    });
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons;
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons:persons});
  }

  render() {

    let persons = null;
    const btnPersonStyle = {
      backgroundColor: '#999'
    };

    // adding dynamic classes...
    const classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red'); //classes['red]
    }
    if(this.state.persons.length <= 1){
      classes.push('bold'); // classes['red','bold']
    }

    if( this.state.showPersons ){
      persons = (<div>
        {this.state.persons.map((person, index) => {
          return <Person 
                  click={() => this.deletePersonHandler(index)} 
                  name={person.name} 
                  age={person.age}
                  key={person.id}
                  change={(event) => this.nameChangeHandler(event, person.id)} />
        })}
      </div>);
      btnPersonStyle.backgroundColor = '#333';
    }

    return (
      <div className="App">
        <p className={classes.join(' ')}>Hello There!</p>
        <p>
          <button onClick={this.changeStateHandler}>Click Me</button> &nbsp;
          <button style={btnPersonStyle} onClick={this.togglePersonsHandler}>Show Persons</button>  
        </p>
        { persons }
      </div>
    )
  }
}

export default App;
