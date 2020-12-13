import React, { Component } from "react";
import Person from "./components/Person";

class App extends Component {
  state = {
    persons: [
      { id: "asf111", name: "Premnath", age: 29 },
      { id: "asf222", name: "Priyadharsini", age: 27 },
      { id: "asf333", name: "Pichaimuthu", age: 57 },
      { id: "asf444", name: "Padmavathy", age: 42 },
    ],
    showPersons: false,
  };

  /*  switchNameHandler = (newName) => {
    console.log("was clicked!!!");
    //this.state.persons[0].name = "Premnath P";
    this.setState({
      persons: [
        { name: newName, age: 29 },
        { name: "Priyadharsini", age: 27 },
        { name: "Pichaimuthu", age: 57 },
        { name: "Padmavathy", age: 42 },
      ],
    });
  }; */

  nameChangedHandler = (event, id) => {
    const personInx = this.state.persons.findIndex((prsn) => {
      return prsn.id === id;
    });

    //const person = Object.assign({}, this.state.persons[personInx]);
    const person = { ...this.state.persons[personInx] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personInx] = person;

    this.setState({
      persons: persons,

      /*  persons: [
        { name: "Premnath Pichaimuthu", age: 29 },
        { name: event.target.value, age: 27 },
        { name: "Pichaimuthu", age: 57 },
        { name: "Padmavathy", age: 42 },
      ], */
    });
  };

  deletePersonHandler = (personIndex) => {
    //mutation
    //const persons = this.state.persons;
    //non mutation
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons,
    });
  };

  togglePersonsHandler = () => {
    /* if (!this.state.showPersons) {
      this.setState({
        showPersons: true,
      });
    } else {
      this.setState({
        showPersons: false,
      });
    } */
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const styles = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                changed={(event) => this.nameChangedHandler(event, person.id)}
                name={person.name}
                age={person.age}
                key={person.id}
              />
            );
          })}

          {/* <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            changed={this.nameChangedHandler}
          />
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
            click={this.switchNameHandler.bind(this, "Pichaimuthu Balaman")}
          >
            Hwy people
          </Person> */}
        </div>
      );
    }

    return (
      <div className="App">
        <header className="App-header">
          {/* <Person name="Premnath" age={29} />
          <Person name="Priyadharsini" age={27} />
          <Person name="Pichaimuthu" age={57}>
            Hwy people
          </Person> */}

          {/* {this.state.showPersons ? ( */}

          {persons}

          {/* <div>
              <Person
                name={this.state.persons[0].name}
                age={this.state.persons[0].age}
              />
              <Person
                name={this.state.persons[1].name}
                age={this.state.persons[1].age}
                changed={this.nameChangedHandler}
              />
              <Person
                name={this.state.persons[2].name}
                age={this.state.persons[2].age}
                click={this.switchNameHandler.bind(this, "Pichaimuthu Balaman")}
              >
                Hwy people
              </Person>
            </div> */}
          {/*  ) : null} */}
          {/* <button
            onClick={this.switchNameHandler.bind(this, "Premnath Pichaimuthu")}
          > */}
          {/*  <button style={styles} onClick=( () => {this.nameChangedHandler(" ")})>
            Change Name
          </button> */}
          <button style={styles} onClick={this.togglePersonsHandler}>
            Toggle Show
          </button>
        </header>
      </div>
    );
  }
}

export default App;
