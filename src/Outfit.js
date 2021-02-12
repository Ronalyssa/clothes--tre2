import React, { Component } from 'react'

import Top from './Top'
import Bottom from './Bottom'
import WardrobeOutfits from './WardrobeOutfits'


class Outfit extends Component {


     // handleDelete = () => {

    //     const id = this.props.outfit.id
    
    //     fetch(`http://localhost:3000/tops/${id}`, {method: 'DELETE'})
    //     .then(resp => resp.json())
    //     .then(outfit => 
    //             this.props.deleteOutfit(this.props.outfit.id)
    //         )
    //     }



    render() {
        return(
            <div>
                {this.props.outfit.name}<br/>
                {this.props.top.name}<br/>
                {this.props.bottom.name}<br/>
                <button>Delete</button>
                <button>Edit</button>
            </div>
        )
    }
}

export default Outfit;