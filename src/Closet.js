import React, { Component } from 'react';
import Top from './Top'
import Bottom from './Bottom'
import {
    Message,
  } from 'semantic-ui-react'


class Closet extends Component {

    showTops = () => {
        if (this.props.user !== null) {
            console.log(this.props.tops)
            return this.props.tops.map(top => {
                return <Top key={top.id}  {...top} deleteTop={this.props.deleteTop} history={this.props.history}/>
            })
        } else {
            // Error message to login or push route to login page.
        return  <Message positive>Well done! You successfully logged in!.</Message>
        }

    }

    handleUploadTop = () => {
        this.props.history.push("/tops/new")
    }
    
 
    render() {
        
        return(
            <div>
               Welcome to your Closet!
               <button onClick={this.handleUploadTop}>Upload Top</button>
               {this.showTops()}
            
               
            </div>
        )
    }
}

export default Closet;
