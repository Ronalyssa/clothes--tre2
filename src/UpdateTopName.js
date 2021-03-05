import React, { Component } from 'react';


class UpdateTopName extends Component {

    state = {
        id: parseInt(this.props.match.params.id),
        // image: '',
        name:''
        // user_id: null
        
        
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
        //console.log(e.target.value)
        this.setState({
            name: e.target.value
          })
    }

    // handleImage = () => {
    //     let paramsId = this.props.match.params.id
    //     let id = parseInt(paramsId)
    //     console.log(this.props.tops)
    //     let selectedTop = this.props.tops.filter(top => top.id === id)
    //     console.log(selectedTop.image)
    //     // this.props.tops.find(top => {})
    //     this.setState({
    //         image: selectedTop.image,
    //         user_id: selectedTop.user_id
    //     })
    // }




    render() {
       console.log(this.props.tops)
        console.log(this.state)
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
                  {/* <input type="text" name="image"  value={this.state.image} onChange={this.handleImage}/>
                  <br/> */}
                  <input type="submit" name="submit"  />
                </form>
            </div>
        )
    }
}

export default UpdateTopName;

// .then(top => {this.handleTop(tops)