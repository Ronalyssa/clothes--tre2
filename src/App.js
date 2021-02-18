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
import UploadBottomForm from './UploadBottomForm'
import UploadTopForm from './UploadTopForm'



class App extends Component {

  state = {
    
    user: null
  }

  deleteTop = (id) => {
    let tops = this.state.tops.filter(top => top.id !== id)
    this.setState({
      tops
    })
  }



  deleteBottom = (id) => {
    let bottoms = this.state.bottoms.filter(bottom => bottom.id !== id)
    this.setState({
      bottoms
    })
  }

  deleteOutfit = (id) => {
    let outfits = this.state.outfits.filter(outfit => outfit.id !== id)
    this.setState({
      outfits
    })
  }


  
  
  // postBottom = (bottomData) => {
  //     fetch("http://localhost:3000/bottoms", {
  //         method: "POST",
  //         headers: {"Content-Type": "application/json"},
  //         body: JSON.stringify({
  //             name: bottomData.name,
  //             image: bottomData.image,
              
  //         })
  //     })
  //   .then(resp => resp.json())
  //   .then(newBottom => {this.setState({  //should the state be the whole bottom? ...doesn't match with the state
  //           name: bottomData.name,
  //           image: bottomData.image
  //           })
  //       })




  handleLogin = (userObj) => {

    
    fetch('http://localhost:3000/login', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(userObj)
    })
    .then(resp => resp.json())
    .then(user => {
      window.localStorage.setItem("userId",user.id);
      this.setState({
        user,
        user_id: user.id,
        tops: user.tops,
        bottoms: user.bottoms,
        outfits: user.outfits,
        wardrobes: user.wardrobes
      })
    })
  } 

handleTops = (topData) => {
  this.setState({
    tops: {...this.state.tops, topData}
  })
}

  render() {
    
    
    return (
        <div className="App">
          <NavBar/>
          <header className="App-header">

           {/* <Switch>
              <Route component={props => <WelcomePage {...props}/>} path={'/welcomePage'}/>
              <Route component={props => <Login {...props}/>} exact path={'/login'}/>
              <Route component={props => <HomePage {...props}/>} path={'/homePage'}/>
              <Route component={props => <UploadTopForm/>} exact path = {'/tops/new'}/> */}
              {/* <Route component={tops => <Closet {...tops}/>} exact path = {'/closet'}/> */}
              {/* <Route component={props => <Top {...props}/>} exact path={'/tops'}/>
              <Route component={props => <Bottom {...props}/>} exact path={'/bottoms'}/>
              <Route component={props => <CreateOutfitForm {...props}/>} exact path={'/outfits/new'}/>
              <Route component={props => <Outfit {...props}/>} exact path={'/outfits'}/>
              */}
            {/* </Switch> */}
            
            {this.state.user ? <div><Wardrobe wardrobes={this.state.wardrobes} outfits={this.state.outfits} tops={this.state.tops} bottoms={this.state.bottoms} deleteOutfit={this.deleteOutfit}/> 
            <Closet tops={this.state.tops} bottoms={this.state.bottoms}  deleteTop={this.deleteTop} deleteBottom={this.deleteBottom}/>  
            <UploadTopForm tops={this.handleTops}/></div> : <Login login={this.handleLogin}/>} 
            

           
            {/* <UploadBottomForm postBottom={this.postBottom}/> */}
           
    
          </header>

        </div>
    );
  }

}



export default App;



// User

// bottoms: Array(2)
// 0:
// created_at: "2021-02-11T13:34:33.245Z"
// id: 9
// image: "BeigeWideLegPants.jpeg"
// name: "Beige Wide Leg Pants"
// updated_at: "2021-02-11T13:34:33.245Z"
// user_id: 11
// __proto__: Object
// 1:
// created_at: "2021-02-11T13:34:33.266Z"
// id: 10
// image: "BlackCargoPants.jpg"
// name: "Black Cargo Pants"
// updated_at: "2021-02-11T13:34:33.266Z"
// user_id: 11
// __proto__: Object
// length: 2
// __proto__: Array(0)
// created_at: "2021-02-11T13:34:32.909Z"
// id: 11
// outfits: Array(2)
// 0:
// bottom_id: 9
// created_at: "2021-02-11T13:34:33.296Z"
// id: 9
// name: "Business Casual"
// top_id: 9
// updated_at: "2021-02-11T13:34:33.296Z"
// user_id: 11
// __proto__: Object
// 1:
// bottom_id: 10
// created_at: "2021-02-11T13:34:33.308Z"
// id: 10
// name: "Casual"
// top_id: 10
// updated_at: "2021-02-11T13:34:33.308Z"
// user_id: 11
// __proto__: Object
// length: 2
// __proto__: Array(0)
// password_digest: "$2a$12$bRZK2WhUNhFRRA.R0Q2KoeX1fo/VRTz1fJIEbDNdBL5.42CsAVbl2"
// tops: Array(2)
// 0:
// created_at: "2021-02-11T13:34:33.209Z"
// id: 9
// image: "BlackVneckBlouse.jpg"
// name: "Black V-Neck Blouse"
// updated_at: "2021-02-11T13:34:33.209Z"
// user_id: 11
// __proto__: Object
// 1:
// created_at: "2021-02-11T13:34:33.218Z"
// id: 10
// image: "BlackShortSleeveTshirt.jpg"
// name: "Black Short Sleeve T-Shirt"
// updated_at: "2021-02-11T13:34:33.218Z"
// user_id: 11
// __proto__: Object
// length: 2
// __proto__: Array(0)
// updated_at: "2021-02-11T13:34:32.909Z"
// username: "ronalyssa"
// wardrobes: Array(2)
// 0:
// created_at: "2021-02-11T13:34:33.347Z"
// id: 21
// name: "Work"
// updated_at: "2021-02-11T13:34:33.347Z"
// user_id: 11
// __proto__: Object
// 1:
// created_at: "2021-02-11T13:34:33.355Z"
// id: 22
// name: "Casual"
// updated_at: "2021-02-11T13:34:33.355Z"
// user_id: 11
// __proto__: Object
// length: 2
// __proto__: Array(0)
// __proto__: Object