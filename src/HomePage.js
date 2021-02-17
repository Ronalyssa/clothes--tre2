import React, { Component } from 'react';


class HomePage extends Component {

    handleWardrobes = () => {
        // redirect to
    }

    handleNewWardrobe = () => {
     // redirect to create wardrobeOutfit page
    }

    handleCloset = () => {
        // redirect to closet page
    }
 

 
    render() {

        return(
            <div>
                 Hello {this.props.user}<br/>
                <button onClick={this.handleWardrobes}>View All Wardrobes</button>
                <button onClick={this.handleNewWardrobe}>Create New Wardrobe</button>
                <button onClick={this.handleCloset}>View All Outfits In Closet</button>
            </div>
        )
    }
}

export default HomePage;