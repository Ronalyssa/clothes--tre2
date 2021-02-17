import React, { Component } from 'react';
import WardrobeOutfits from './WardrobeOutfits'
import CreateOutfitForm from './CreateOutfitForm'



class Wardrobe extends Component {

    state = {
        outfits: []
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
                outfits
            })
        })
        
    }

 
    showWardrobe = () => {
    
        return this.props.wardrobes.map(wardrobe => {
            return <button id={wardrobe.id} onClick={this.handleClick}>{wardrobe.name}</button>
        })
    }


    


 
    render() {
         
        return(
            
            <div>
            Your Wardrobes
            {this.showWardrobe(this.selectedOutfit)} 

            <WardrobeOutfits selectedOutfits={this.state.outfits} tops={this.props.tops} bottoms={this.props.bottoms} />
            <CreateOutfitForm/>

            </div>
        )
    }
}

export default Wardrobe;