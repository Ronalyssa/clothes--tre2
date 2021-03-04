import React, { Component } from 'react';


class UpdateTopName extends Component {

    state = {
        name:''
    }
    
    editTopName = (e) => {
        e.preventDefault()

        //NEED TO PASS DOWN TO HERE THE ITEM THAT WAS CLICKED TO HAVE ACCESS TO ID AND NAME

        // let top = this.props.tops.filter(top => {top.name === this.state.name})
        let paramsId = this.props.match.params.id
        let id = parseInt(paramsId)
        console.log(id)

        fetch(`http://localhost:3000/tops/${id}`, { 

            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
              name: this.state.name
        
            })
        })
        .then(resp => resp.json())
        .then(topData => console.log(topData))
        // .then(top => {this.handleTop(tops)
        //   this.props.history.push("/closet")
        // })

    }

    handleNameChange = (e) => {
        //console.log(e.target.value)
        this.setState({
            name: e.target.value
          })
    }




    render() {
    //    console.log(this.props)

       // console.log(this.props.match.params.id)
    //    let paramsId = this.props.match.params.id
    //    let id = parseInt(paramsId)
    //    console.log(id)
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