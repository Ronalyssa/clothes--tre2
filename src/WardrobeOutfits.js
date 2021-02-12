import React, { Component } from 'react';
import Top from './Top'
import Bottom from './Bottom'
import Outfit from './Outfit'


class WardrobeOutfits extends Component {
    
    state = {

        outfits: []

    }


    renderOutfits = () => {
       
        return this.props.selectedOutfits.map(selectedOutfit => {
            let top = this.props.tops.find(top => top.id === selectedOutfit.top_id)
            let bottom = this.props.bottoms.find(bottom => bottom.id === selectedOutfit.bottom_id)
            return <Outfit key={selectedOutfit.id} outfit={selectedOutfit} top={top} bottom={bottom}/>
        })

    
    }


    handleClick = (e) => {
        
    }
    



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

        return(
            <div>
    
                {this.renderOutfits()}
                
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
