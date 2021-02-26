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

  // componentDidMount() {
  //   fetch('http://localhost:3000/users')
  //   .then(resp => resp.json())
  //   .then(user => {this.setState({
  //         user
  //     })
  //   })
  // }

  handleLogin = (userObj) => {
    // console.log(userObj)
    fetch('http://localhost:3000/login', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(userObj)
    })
    .then(resp => resp.json())
    .then(user => {this.setState({
      user,
      tops: user.tops,
      bottoms: user.bottoms
      })
    })
  }  

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <header >
          <NavBar/>
          <HomePage/>
          <Login login={this.handleLogin}/>

          {/* <Switch>
              <Route component={props => <HomePage {...props}/>} path={'/homePage'}/>
              <Route component={props => <Login {...props}/>} exact path={'/login'}/>
              <Route component={props => <WelcomePage {...props}/>} path={'/welcomePage'}/>
              <Route component={tops => <Closet {...tops}/>} exact path = {'/closet'}/>
              <Route component={props => <Top {...props}/>} exact path={'/tops'}/>
              <Route component={props => <Bottom {...props}/>} exact path={'/bottoms'}/>
              <Route component={props => <UploadBottomForm/>} exact path = {'/bottoms/new'}/>
              <Route component={props => <UploadTopForm/>} exact path = {'/tops/new'}/>
              <Route component={props => <CreateOutfitForm {...props}/>} exact path={'/outfits/new'}/>
              <Route component={props => <Outfit {...props}/>} exact path={'/outfits'}/>
          </Switch> */}
          
          {/* {this.state.user ? <div><Wardrobe wardrobes={this.state.wardrobes} outfits={this.state.outfits} tops={this.state.tops} bottoms={this.state.bottoms} deleteOutfit={this.deleteOutfit}/> 
            <Closet tops={this.state.tops} bottoms={this.state.bottoms}  deleteTop={this.deleteTop} deleteBottom={this.deleteBottom}/>  
            <UploadTopForm tops={this.handleTops}/></div> : <Login user={this.state.user/>} login={this.handleLogin} */}

            {/* {this.state.user ? <div> <Closet tops={this.state.user.tops} bottoms={this.state.user.bottoms}/> </div> : <Login user={this.state.user} login={this.handleLogin()}/> } */}

          
        </header>
      </div>
    );
  }
 
}

export default App;
