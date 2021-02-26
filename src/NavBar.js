import React, { Component } from 'react';


class NavBar extends Component {
    
    handleClick = () => {
        console.log("I was clicked!")
        // this.props.history.push("/Login")
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