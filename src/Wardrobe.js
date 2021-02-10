import React, { Component } from 'react';


class Wardrobe extends Component {
    
    showWardrobe = () => {
        return this.props.wardrobes.map(wardrobe => {
            return <h1> {wardrobe.name} </h1>
        })
    }

 
    render() {

        return(
            <div>
            Wardrobes
            {this.showWardrobe()}
            </div>
        )
    }
}

export default Wardrobe;