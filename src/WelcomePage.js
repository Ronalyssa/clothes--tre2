import React, { Component } from 'react';


class WelcomePage extends Component {

    handleClick = () => {
        // have route to redirect to closet
        this.props.history.push("/closet")
    }
    
 
    render() {
        console.log(this.props.currentUser)
        return(
            <div >
                 Welcome 
                 {/* {this.props.user} */}
                 <br/>
            <button onClick={this.handleClick}>View Closet</button>
            {/* <button>View All Wardrobes</button> */}
            {/* <button>Create New Wardrobe</button> */}
            {/* <button>View All Outfits</button>
            <button>Work Wardrobe</button>
            <button>Go To MarketPlace</button> */}
            </div>
        )
    }
}

export default WelcomePage;