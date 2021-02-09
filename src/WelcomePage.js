import React, { Component } from 'react';



class WelcomePage extends Component {
    
 

 
    render() {

        return(
            <div>
            Welcome {this.props.user}<br/>
            <button>View All Wardrobes</button>
            <button>Create New Wardrobe</button>
            <button>Workout Wardrobe</button>
            <button>Work Wardrobe</button>
            <button>Go To MarketPlace</button>
            </div>
        )
    }
}

export default WelcomePage;