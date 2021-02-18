import React, { Component } from 'react';
import Top from './Top'
import Bottom from './Bottom'
import Outfit from './WardrobeOutfits'

class Closet extends Component {
    
 
    showTops = () => {
        return this.props.tops.map(top => {
            return  <Top key={top.id} top={top} deleteTop={this.props.deleteTop}/>
        })
    }

    showBottoms = () => {
        return this.props.bottoms.map(bottom => {
            return  <Bottom key={bottom.id} bottom={bottom} deleteBottom={this.props.deleteBottom}/>
        })
    }
 
 
    render() {
        console.log(this.props.tops)

        return(
            <div>
                Closet 
                <button> Show All Clothing</button>
                    {this.showTops()}
                    {this.showBottoms()}
                    
             
            </div>
        )
    }
}

export default Closet;