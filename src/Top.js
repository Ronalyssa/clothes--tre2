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
    }
    
 
    render() {

        return(
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