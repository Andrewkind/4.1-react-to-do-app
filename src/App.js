import React from 'react';

class App extends React.Component {
  render() {
    return (
      <>
      <h1>React To-Do App</h1>
        <form> 
      <label htmlFor="newToDo">Enter a new task
        <input type="text" name="newToDo" id="newToDo" />
      </label>
      <input type="submit" value= "Add New Task" />
        </form>
        
        <h2>Current To-Dos:</h2>
        <ul>
          
        </ul>
      </>
    )
  }
}

export default App;
