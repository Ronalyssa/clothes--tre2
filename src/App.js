import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Closet from './Closet'
import Login from './Login'
import NavBar from './NavBar'
import HomePage from './HomePage'
import WelcomePage from './WelcomePage'

class App extends Component {

  state = {
    user: null
  }

  componentDidMount() {
    fetch('http://localhost:3000/users')
    .then(resp => resp.json())
    .then(console.log)
  }

  render() {
    return (
      <div className="App">
        <header >
          <NavBar/>
          <HomePage/>
          
          
        </header>
      </div>
    );
  }
 
}

export default App;
