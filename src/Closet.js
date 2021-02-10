import React, { Component } from 'react';
import Top from './Top'
import Bottom from './Bottom'


class Closet extends Component {
    
 
    showTops = () => {
        return this.props.tops.map(top => {
            return  <Top key={top.id} {...top}/>
        })
    }

    showBottoms = () => {
        return this.props.bottoms.map(bottom => {
            return  <Bottom key={bottom.id} {...bottom}/>
        })
    }
 
 
    render() {
        // console.log(this.props.tops.clothing)

        return(
            <div>
            Closet 
            {this.showTops()}
            {this.showBottoms()}
           
            </div>
        )
    }
}

export default Closet;