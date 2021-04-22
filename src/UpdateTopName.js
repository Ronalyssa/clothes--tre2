import React, { Component } from 'react';


class UpdateTopName extends Component {

    state = {
        id: parseInt(this.props.match.params.id),
        name:''    
    }
    
    editTopName = (e) => {
        e.preventDefault()
        let paramsId = this.props.match.params.id
        let id = parseInt(paramsId)
      

        fetch(`http://localhost:3000/tops/${id}`, { 

            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                id: this.state.id,
                name: this.state.name
            
        
            })
        })
        .then(resp => resp.json())
        .then(topData => {
            this.props.editTopName(topData)
            this.props.history.push("/closet" )
        })

    }

    handleNameChange = (e) => {
        this.setState({
            name: e.target.value
          })
    }

    render() {
      
        return(
            <div>
                 <form onSubmit={this.editTopName}>
                  <h3>Edit a Top</h3>
                  <input type="text" name="name" onChange={this.handleNameChange} />
                  <br/>
                  <input type="submit" name="submit"  />
                </form>
            </div>
        )
    }
}

export default UpdateTopName;