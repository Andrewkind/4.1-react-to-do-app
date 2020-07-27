import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      newTodo: "",
      toDos: []
    };
  }


  addToDo(event) {

    event.preventDefault();
    console.log("we are running");

  }

  render() {
    return (
      <>
        <h1>React To-Do App</h1>
        <form onSubmit= {this.addToDo}>
          <label htmlFor="newToDo">Enter a new task
        <input type="text" name="addToDo" id="newToDo" required/>
          </label>
          <input type="submit" value="Add New Task" />
        </form>

        <h2>Current To-Dos:</h2>
        <ul>

        </ul>
      </>
    )
  }
}

export default App;
