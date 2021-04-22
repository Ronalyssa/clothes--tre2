import React, { Component } from 'react';


class WelcomePage extends Component {

    handleClick = () => {
        this.props.history.push("/closet")
    }
    
 
    render() {
        return(
            <div >
                 Welcome 
                 
                 <br/>
            <button onClick={this.handleClick}>View Closet</button>
            
            </div>
        )
    }
}

export default WelcomePage;