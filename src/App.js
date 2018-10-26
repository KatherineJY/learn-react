import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// import Home from './components/Home'
// import List from './components/List'
//import ToDoList from './components/ToDoList'
//import ReactForm from './components/ReactForm'
//import Home from './components/Home'

import Home from './components/HomeForRoute'
import News from './components/NewsForRoute'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Link to="/">Home</Link>
          <Link to="/news">News</Link>
          
          <Route exact path="/" component={Home}></Route>
          <Route path='/news' component={News}></Route>
        </div>
      </Router> 
    );
  }
  
}

export default App;
