import React, { Component } from 'react';
import WardrobeOutfits from './WardrobeOutfits'
import CreateOutfitForm from './CreateOutfitForm'




class Wardrobe extends Component {

    state = {
        outfits: [],
        wardrobe_id: null
    }
    

    handleClick = (e) => {
        let currentWardrobeId = parseInt(e.target.id)

        fetch('http://localhost:3000/get_outfits', {
            method:'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                wardrobe_id: currentWardrobeId
            })
        })
        .then(resp => resp.json())
        .then(wo => {
            let outfitIdArr =wo.map(wo => wo.outfit_id)
            let outfits = this.props.outfits.filter(outfit => outfitIdArr.includes(outfit.id))
            this.setState({
                outfits,
                wardrobe_id: currentWardrobeId

            })
        })
        
    }

 
    showWardrobe = () => {
    
        return this.props.wardrobes.map(wardrobe => {
            return <button id={wardrobe.id} onClick={this.handleClick}>{wardrobe.name}</button>
        })
    }


    deleteSelectedOutfit = (id) => {
        let outfits = this.state.outfits.filter(outfit => outfit.id !== id)
        this.setState({
          outfits
        })

    }


 
    render() {
        // console.log(this.state.outfits)
        return(
            
            
            <div>
            Wardrobes
            {this.showWardrobe(this.selectedOutfit)} 

            {/* {this.showAllOutfits()} */}
            <WardrobeOutfits 
                selectedOutfits={this.state.outfits} 
                tops={this.props.tops} 
                bottoms={this.props.bottoms} 
                allOutfits={this.props.outfits} 
                deleteOutfit={this.props.deleteOutfit} 
                wardrobeId={this.state.wardrobe_id} 
                deleteSelectedOutfit={this.deleteSelectedOutfit}/>
            <CreateOutfitForm/>

            </div>
        )
    }
}

export default Wardrobe;

// this.state.outfits

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