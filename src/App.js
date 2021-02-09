import './App.css';
import React, { Component } from 'react';
import Login from './Login'
import WelcomePage from './WelcomePage'

class App extends Component {

  state = {
    
    top: '',
    bottom: '',
    outfit: '',
    wardrobe: '',
    user: '',
    password: ''

  }

  componentDidMount() {
    fetch('http://localhost:3000/users')
    .then(resp => resp.json())
    .then(userArr => { userArr.map(user => {
        this.setState({
          user: user.username,
          password: user.password_digest
        })
      })
    })
  }

  // userInfo = () => {

  // }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <Login user={this.state.user} password={this.state.password} />
          <WelcomePage user={this.state.user}/>
        </header>
      </div>
    );
  }

}

export default App;
