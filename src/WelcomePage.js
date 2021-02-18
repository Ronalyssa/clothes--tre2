import React, { Component } from 'react';
import { Link } from "react-router-dom";



class WelcomePage extends Component {
    
 

 
    render() {

        return(
            <div>
            Welcome {this.props.user}<br/>
            <button>View Closet</button>
            <button>View All Wardrobes</button>
            {/* <button>Create New Wardrobe</button> */}
            <button>View All Outfits</button>
            <button>Work Wardrobe</button>
            <button>Go To MarketPlace</button>
            

            
            </div>
            // based on what is clicked
            // View all Wardrobes -- this.props.history.push("/Wardrobe")
            // Create New Wardrobe-- this.props.history.push("/???")
            // this.props.history.push("/HomePage")
            // this.props.history.push("/HomePage")
        )
    }
}

export default WelcomePage;