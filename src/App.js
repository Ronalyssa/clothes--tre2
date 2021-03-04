import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Closet from './Closet'
import Top from './Top'
import Bottom from './Bottom'
import ClosetContainer from './ClosetContainer'
import Login from './Login'
import NavBar from './NavBar'
import HomePage from './HomePage'
import WelcomePage from './WelcomePage'
import Signup from './Signup'
import UploadTopForm from './UploadTopForm'
import UploadBottomForm from './UploadTopForm'
import UpdateTopName from './UpdateTopName'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import history from './history'


class App extends Component {

  state = {
    user: null
  }

  selectedTop = (id) => {
    // let top = this.state.tops.filter(top => {top.id === id})
  }

  editTopName = (id) => {

    

  }

  handleAddTops = (topData) => {
    this.setState({
      tops: [...this.state.tops, topData]
    })
  }


  deleteTop = (id) => {
    let tops = this.state.tops.filter(top => top.id !== id)
    this.setState({
      tops
    })
  }

  // componentDidMount() {
  //   fetch('http://localhost:3000/users')
  //   .then(resp => resp.json())
  //   .then(user => {this.setState({
  //         user
  //     })
  //   })
  // }

  // handleLogin = (userObj) => {
  //   // console.log(userObj)
  //   fetch('http://localhost:3000/login', {
  //     method: "POST",
  //     headers: {"Content-Type": "application/json"},
  //     body: JSON.stringify(userObj)
  //   })
  //   .then(resp => resp.json())
  //   .then(user => {this.setState({
  //     user,
  //     tops: user.tops,
  //     bottoms: user.bottoms
  //     })
  //     //this.props.history.push("/welcomePage")
  //     console.log(this.props)
  //     localStorage.setItem("userId", user.id)
  //   })
  // }  

  // handleSignup = (userObj) => {
  //   // console.log(userObj)
  //   fetch('http://localhost:3000/users', {
  //     method: "POST",
  //     headers: {"Content-Type": "application/json"},
  //     body: JSON.stringify({
  //       user: {
  //         username: userObj.username,
  //         password: userObj.password
  //       }
  //     })
  //   })
  //   .then(resp => resp.json())
  //   .then(user => {this.setState({
  //     user
  //     })
      
  //   })
  // }  



  render() {
    // console.log(this.state)

    // console.log(this.props)
    return (
      <div className="App">
        <header >
         
          {/* <HomePage/>  */}
          {/* <Login login={this.handleLogin}/> */}
          {/* <Signup signup={this.handleSignup}/> */}

          {/* <Closet tops={this.state.tops} bottoms={this.state.bottoms} user={this.state.user} deleteTop={this.deleteTop} />
           <UploadTopForm tops={this.state.tops} bottoms={this.state.bottoms} addTops={this.handleAddTops}/> */}

         <Router history={history}>
         <NavBar/>
          <Switch>
                <Route component={props => <HomePage {...props}/>} path={'/homePage'}/>
                <Route component={props => <Login  {...props} login={this.handleLogin}/>} exact path={'/login'}/>
                <Route component={props => <Signup {...props}/>} exact path={'/signup'}/>
                <Route component={props => <WelcomePage {...props}/>} path={'/welcomePage'}/>
                <Route component={props => <Closet tops={this.state.tops} bottoms={this.state.bottoms} user={this.state.user} deleteTop={this.deleteTop} {...props}/>} exact path = {'/closet'}/>
                <Route component={props => <Top {...props}/>} exact path={'/tops'}/>
                <Route component={props => <Bottom {...props}/>} exact path={'/bottoms'}/>
                <Route component={props => <UpdateTopName tops={this.state.tops} {...props}/>} exact path = {'/tops/update/:id'}/>
                <Route component={props => <UploadBottomForm {...props}/>} exact path = {'/bottoms/new'}/>
                <Route component={props => <UploadTopForm tops={this.state.tops} bottoms={this.state.bottoms} addTops={this.handleAddTops} {...props}/>} exact path = {'/tops/new'}/>
              
            </Switch>
         </Router>
          
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




// <Route component={props => <CreateOutfitForm {...props}/>} exact path={'/outfits/new'}/>
// <Route component={props => <Outfit {...props}/>} exact path={'/outfits'}/>



// fetch('http://localhost:3000/login', {


  // .then(user => {this.setState({
  //   user,
  //   tops: user.tops,
  //   bottoms: user.bottoms
  //   })
  //   //this.props.history.push("/welcomePage")
  //   // console.log(this.props)
  //   localStorage.setItem("userId", user.id)
  // })