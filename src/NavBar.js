import React, { Component } from 'react';


class NavBar extends Component {
    
    handleClick = () => {
        console.log("I was clicked!")
    }
 
    render() {

        return(
            <div>
                <button> Home Page</button>
                <button onClick={this.handleClick}>Login</button>  
            </div>
        )
    }
}

export default NavBar;