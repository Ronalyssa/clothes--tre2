import React, { Component } from 'react';
import { Link } from "react-router-dom";


class NavBar extends Component {
    
  
    render() {

        return(
            <div>
                <Link to='/homePage'> 
                Home page
                </Link>
                <Link to='/login'> 
                Login
                </Link>
            </div>
        )
    }
}

export default NavBar;


// onClick={this.handleClick}