import React, { Component } from 'react';
import Top from './Top'
import Bottom from './Bottom'
import Outfit from './Outfit'



class WardrobeOutfits extends Component {
    
    state = {

        outfits: [],
        showAll: false

    }


    renderSelectedOutfit = () => {
       
        if (this.state.showAll) {
            return this.props.allOutfits.map(outfitObj => {
                let top = this.props.tops.find(top => top.id === outfitObj.top_id)
                let bottom = this.props.bottoms.find(bottom => bottom.id === outfitObj.bottom_id)
                return < Outfit key={outfitObj.id} outfit={outfitObj} top={top} bottom={bottom} deleteOutfit={this.props.deleteOutfit} />
            })
        } else {
        return this.props.selectedOutfits.map(selectedOutfit => {
                let top = this.props.tops.find(top => top.id === selectedOutfit.top_id)
                let bottom = this.props.bottoms.find(bottom => bottom.id === selectedOutfit.bottom_id)
                return  < Outfit key={selectedOutfit.id} outfit={selectedOutfit} top={top} bottom={bottom} deleteSelectedOutfit={this.props.deleteSelectedOutfit} wardrobeId={this.props.wardrobeId} /> 
            })
        }
    }

    handleAllOutfits = () => {
        this.setState({
            showAll: !this.state.showAll
        })
    }


    // {this.state.user ? <div><Wardrobe wardrobes={this.state.wardrobes} outfits={this.state.outfits} tops={this.state.tops} bottoms={this.state.bottoms}/> 
    //         <Closet tops={this.state.tops} bottoms={this.state.bottoms}  deleteTop={this.deleteTop} deleteBottom={this.deleteBottom}/></div> : <Login login={this.handleLogin}/>} 

    // showAllOutfits = () => {
    //   return this.props.allOutfits.map(console.log)
    // }
    



    //   handleEditTop = (topData) => {
    //       ///want carousel 
    //     fetch(`http://localhost:3000/tops/${id}`, {
    //     method: "PATCH",
    //     headers: {"Content-Type": "application/json"},
    //     body: JSON.stringify({
    //         top: topData
    //     })
    //  })
    //  .then(resp => resp.json())
    //  .then(newToy => {this.setState({
    //     // outfit but with different top
    //     })
    //   })
    // }
 
    render() {
        //console.log(this.state.outfits)
        return(
            <div>
    
                {this.renderSelectedOutfit()}
                <button onClick={this.handleAllOutfits}>View All Outfits</button>
                {/* <AllOutfits  tops={this.props.tops} bottoms={this.props.bottoms} allOutfits={this.props.allOutfits}/> */}
            </div>
        )
    }
}

export default WardrobeOutfits;




// outfits
// :
// [{…}]


// 0
// :
// {bottom_id: 21, created_at: "2021-02-11T14:43:49.44…}
// bottom_id
// :
// 21
// created_at
// :
// "2021-02-11T14:43:49.442Z"
// id
// :
// 21
// name
// :
// "Business Casual"
// top_id
// :
// 21
// updated_at
// :
// "2021-02-11T14:43:49.442Z"
// user_id
// :
// 17
// new entry
// : 
// ""
// new entry
