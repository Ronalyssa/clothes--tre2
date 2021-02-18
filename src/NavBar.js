import React, { Component } from 'react';
import { Button, Dropdown, Menu } from 'semantic-ui-react'
import {
    Switch,
    Route,
    Link
  } from "react-router-dom";


class NavBar extends Component {
    
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

 
    render() {
        const { activeItem } = this.state

        return(
            <Menu size='small'>
                <Link  to='HomePage'>
                    <Menu.Item
                        name='home'
                        active={activeItem === 'home'}
                        onClick={this.handleItemClick}
                    />
                </Link>
        
    
            <Menu.Menu position='right'>
    
              <Menu.Item>
                <Link to='/Login'>
                <Button primary>Log In</Button>
                </Link>
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        )

        // Depending on which button to clicked Home vs. Login

        // Home-this.props.history.push("/HomePage")
        // Log in -this.props.history.push("/Login")
    }
}

export default NavBar;