import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button, Menu } from 'semantic-ui-react'


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

                <Link  to='closet'>
                    <Menu.Item
                        name='closet'
                        active={activeItem === 'closet'}
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
    }
}

export default NavBar;


// onClick={this.handleClick}