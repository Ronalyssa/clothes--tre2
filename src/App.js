import './App.css';

import React, { Component } from 'react';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from './Login'
import WelcomePage from './WelcomePage'
import NavBar from './NavBar'
import HomePage from './HomePage'
import Wardrobe from './Wardrobe'
import Closet from './Closet'


class App extends Component {

  state = {
    
    user: null
  }

  handleLogin = (userObj) => {

    console.log(userObj)
    fetch('http://localhost:3000/login', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(userObj)
    })
    .then(resp => resp.json())
    .then(user => {
      this.setState({
        user
      })
    })
  } 




  render() {
    // console.log(this.state.wardrobes)

    return (
        <div className="App">
          <NavBar/>
          <header className="App-header">

            {/* <Switch>
              <Route component={HomePage} path={'/'}/>
              <Route component={Login} path={'/Login'}/>
            </Switch> */}
            
            {this.state.user ? <div><Wardrobe wardrobes={this.state.user.wardrobes}/> 
            <Closet tops={this.state.user.tops} bottoms={this.state.user.bottoms}/></div> : <Login login={this.handleLogin}/>} 
            
            
    
          </header>
        </div>
    );
  }

}

export default App;
