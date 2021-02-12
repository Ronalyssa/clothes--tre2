import React, { Component } from 'react';


class Top extends Component {
    
 
    state = {

        top: [],
        id: ''
    }


    // handleDelete = () => {

    //     const id = this.props.top.id
    
    //     fetch(`http://localhost:3000/tops/${id}`, {method: 'DELETE'})
    //     .then(resp => resp.json())
    //     .then(top => 
    //             this.props.deleteTop(this.props.user.top.id)
    //         )
    //     }

    render() {

        return(
            <div>
                
            {this.props.top.name}<br/> 
            {this.props.top.image} <br/>
            <button onClick={this.handleDelete}> Delete </button>
            </div>
        )
    }
}

export default Top;