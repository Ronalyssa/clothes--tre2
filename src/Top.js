import React, { Component } from 'react';
import { Button, Card } from 'semantic-ui-react'


class Top extends Component {

    handleDelete = () => {

        const id = this.props.id
        console.log(id)
        fetch(`http://localhost:3000/tops/${id}`, {method: 'DELETE'})
        .then(resp => resp.json())
        .then(top => 
                this.props.deleteTop(id)
            )
        }

    handleChangeName = () => {
        // either redirect to update page or to 
        // patch fetch
        //console.log(this.props)
        //console.log(this.props.id)
        let id = this.props.id
        // console.log(id)
       // console.log(this.props.name)
        let name = this.props.name
        // fetch(`http://localhost:3000/tops/${id}`, {
        //     method: "PATCH",
        //     headers: {"Content-Type": "application/json"},
        //     body: JSON.stringify(name)
        //   }) 
        this.props.history.push(`/tops/update/${id}`)
    }
    
 
    render() {
        console.log(this.props)
        return(
      

        <div>
            {this.props.name}<button onClick={this.handleChangeName}>Edit Name</button>
            {/* {this.props.image} */}

            <img src={this.props.image} />
            <button onClick={this.handleDelete}>Delete</button>
        </div>
        )
    }
}

export default Top;




  //     <Card>
        //         <Card.Content>
        //             <Card.Description>
        //                 {this.props.name}
        //             </Card.Description>
        //             <Card.Description>
        //                 {this.props.image}
        //             </Card.Description>
        //             </Card.Content>
        //             <Card.Content extra>
        //                 <div className='ui two buttons'>
        //                     <Button basic color='green'>
        //                     Task Complete
        //                     </Button>
        //                     <Button basic color='red'>
        //                     Remove
        //                     </Button>
        //                 </div>
        //         </Card.Content>
        //   </Card>