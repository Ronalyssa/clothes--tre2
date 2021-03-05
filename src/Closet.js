import React, { Component } from 'react';
import ClosetContainer from './ClosetContainer'
import Top from './Top'
import Bottom from './Bottom'

// import ReactDOM from "react-dom";
// import { Container, Header, Message, Segment } from "semantic-ui-react";

// // Heads up!
// // Don't forget to setup required CSS!
// import "pure-react-carousel/dist/react-carousel.es.css";

// import CardCarousel from "./examples/CardCarousel";
// import ImageCarousel from "./examples/ImageCarousel";




class Closet extends Component {

    showTops = () => {
        // console.log(this.props.tops)
        if (this.props.user !== null) {
            console.log(this.props.tops)
            return this.props.tops.map(top => {
                return <Top key={top.id}  {...top} deleteTop={this.props.deleteTop} history={this.props.history}/>
            })
        } else {
            console.log("Please sign in")
            // Error message to login or push route to login page.
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
