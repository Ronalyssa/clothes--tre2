import './App.css';
import React, { Component } from 'react';
import Closet from './Closet'
import Top from './Top'
import Bottom from './Bottom'
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
    currentUser: null
  }



  editTopName = (updatedTop) => {
    let tops = this.state.tops.map(top => {
      if(top.id === updatedTop.id){
         return updatedTop
      } else {
         return top
      }
    })
   this.setState({tops})
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




  // handleLogin = (userObj) => {
  //   fetch('http://localhost:3000/api/v1/auth', {
  //     method: "POST",
  //     headers: {"Content-Type": "application/json"},
  //     body: JSON.stringify(userObj)
  //   })
  //   .then(resp => resp.json())
  //   .then(authData => {this.setState({
  //     user: authData.user
  //     })
    
  //     localStorage.setItem("token", authData.token)
  //     console.log(localStorage.token)
  //   })
  // }  

  handleSignup = (userObj) => {
    fetch('http://localhost:3000/users', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        user: {
          username: userObj.username,
          password: userObj.password
        }
      })
    })
    .then(resp => resp.json())
    .then(user => {this.setState({
      user
      })  
    })
  }  


  componentDidMount() {
    const token = localStorage.getItem('token')
    console.log(token)
    console.log("hello")
      if (!token) {
        // console.log(this.history)
        this.props.history.push('/login')
      } else {
        fetch('http://localhost:3000/api/v1/current_user', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
          .then(resp => resp.json())
          .then(userData => {this.setState({
            currentUser: userData.user,
            tops: userData.user.tops,
            bottoms: userData.user.bottoms
          })
        })
      }
  }


  render() {
    console.log(this.state.currentUser)

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
                <Route component={props => <Closet tops={this.state.tops} bottoms={this.state.bottoms} user={this.state.currentUser} deleteTop={this.deleteTop} {...props}/>} exact path = {'/closet'}/>
                <Route component={props => <Top {...props}/>} exact path={'/tops'}/>
                <Route component={props => <Bottom {...props}/>} exact path={'/bottoms'}/>
                <Route component={props => <UpdateTopName tops={this.state.tops} editTopName={this.editTopName} {...props}/>} exact path = {'/tops/update/:id'}/>
                <Route component={props => <UploadBottomForm {...props}/>} exact path = {'/bottoms/new'}/>
                <Route component={props => <UploadTopForm tops={this.state.tops} bottoms={this.state.bottoms} addTops={this.handleAddTops} currentUser={this.state.currentUser} {...props}/>} exact path = {'/tops/new'}/>
              
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
