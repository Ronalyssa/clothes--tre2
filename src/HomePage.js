import React, { Component } from 'react';


class HomePage extends Component {
    
 

 
    render() {

        return(
            <div>
                 Hello {this.props.user}<br/>
                <button>View All Wardrobes</button>
                <button>Create New Wardrobe</button>
                <button>View All Outfits In Closet</button>
            </div>
        )
    }
}

export default HomePage;