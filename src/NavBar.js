import React, { Component } from 'react';
import { Link } from "react-router-dom";


class NavBar extends Component {
    
    // handleClick = () => {
    //     console.log("I was clicked!")
    //     // this.props.history.push("/Login")
    // }
 
    render() {

        return(
            <div>
                {/* <button> Home Page</button>
                <button >Login</button>   */}

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