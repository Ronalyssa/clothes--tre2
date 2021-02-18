import React, { Component } from 'react'

import Top from './Top'
import Bottom from './Bottom'
import WardrobeOutfits from './WardrobeOutfits'


class Outfit extends Component {


     handleDelete = () => {
       

        const id = this.props.outfit.id
    
        fetch(`http://localhost:3000/outfits/${id}`, {method: 'DELETE'})
        .then(resp => resp.json())
        .then(message => 
                this.props.deleteOutfit(id)
            )
        }

        handleDeleteSelected = () => {
       
           
            const id = this.props.wardrobeId
        
            fetch(`http://localhost:3000/outfits/${id}`, {method: 'DELETE'})
            .then(resp => resp.json())
            .then(message => 
                    this.props.deleteSelectedOutfit(id)
                )
            }



    render() {
        return(
            <div>
                {this.props.outfit.name}<br/>
                {this.props.top.name}<br/>
                {this.props.bottom.name}<br/>
                <button onClick={this.handleDelete}>Remove From Outfit from Closet and Wardrobe</button>
                <button onClick={this.handleDeleteSelected}>Remove From Outfit from Wardrobe</button>
                <button>Edit</button>
            </div>
        )
    }
}

export default Outfit;


// outfit from wardrobe
// [{…}]
// 0:
// bottom_id: 13
// created_at: "2021-02-17T06:45:56.807Z"
// id: 13
// name: "Business Casual"
// top_id: 13
// updated_at: "2021-02-17T06:45:56.807Z"
// user_id: 7
// __proto__: Object
// length: 1
// __proto__: Array(0)