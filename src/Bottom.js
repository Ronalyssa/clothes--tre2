import React, { Component } from 'react';


class Bottom extends Component {
    
 
    state = {

        bottom: [],
        id: ''
    }
 
    handleDelete = () => {

        const id = this.props.bottom.id
    
        fetch(`http://localhost:3000/bottoms/${id}`, {method: 'DELETE'})
        .then(resp => resp.json())
        .then(bottom => 
                this.props.deleteBottom(this.props.user.bottom.id)
            )
        }

 
    render() {

        return(
            <div>
           {this.props.bottom.name}<br/> 
            {this.props.bottom.image}<br/> 
            <button onClick={this.handleDelete}>delete</button>
            </div>
        )
    }
}

export default Bottom;