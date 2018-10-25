import React, { Component } from 'react';
import './App.css';

// import Home from './components/Home'
// import List from './components/List'
import ToDoList from './components/ToDoList'
import ReactForm from './components/ReactForm'

class App extends Component {
  render() {
    return (
      <div>
        <ToDoList />
        <ReactForm />
      </div>    
    );
  }
}

export default App;
