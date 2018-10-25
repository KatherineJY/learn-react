import React, { Component } from 'react';
import './App.css';

// import Home from './components/Home'
import List from './components/List'
import ToDoList from './components/ToDoList'

class App extends Component {
  render() {
    return (
      <div>
        <ToDoList />
      </div>    
    );
  }
}

export default App;
