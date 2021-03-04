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
        // console.log(this.props.tops)
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


// {id: 101, name: "ARISTICAT HOODIE", image: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%…2Chmver%5B1%5D&call=url[file:/product/fullscreen]", user_id: 14}
// id: 101
// image: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F1f%2Fd4%2F1fd4c2705bf21db694bb276978dbcbac68bfe5b7.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]"
// name: "ARISTICAT HOODIE"
// user_id: 14
// __proto__: Object