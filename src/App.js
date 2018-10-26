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
import Content from './components/Content'
import Product from './components/Product'
import ProductContent from './components/ProductContent'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Link to="/">Home</Link>
          <Link to="/news">News</Link>
          
          <Route exact path="/" component={Home}></Route>
          <Route path='/news' component={News}></Route>
          <Route path='/product' component={Product}></Route>
          <Route path='/content/:aid' component={Content}></Route>
          <Route path='/productcontent' component={ProductContent}></Route>
        </div>
      </Router> 
    );
  }
  
}

export default App;
