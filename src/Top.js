import React, { Component } from 'react';
import { CarouselProvider, Slider } from "pure-react-carousel";
import CustomCardSlide from "./CustomCardSlide";
import CustomDotGroup from "./CustomDotGroup";




class Top extends Component {

    handleDelete = () => {

        const id = this.props.id
     
        fetch(`http://localhost:3000/tops/${id}`, {method: 'DELETE'})
        .then(resp => resp.json())
        .then(top => 
                this.props.deleteTop(id)
            )
        }

    handleChangeName = () => {
        let id = this.props.id
        this.props.history.push(`/tops/update/${id}`)
    }
    
 
    render() {
      
        return(
            <CarouselProvider
            naturalSlideWidth={1}
            naturalSlideHeight={1.25}
            totalSlides={2/4}
            style={{ width: "300px" }}
          >
            <Slider>
              <CustomCardSlide
                image={this.props.image}
                index={0}
                header={this.props.name}
            
              />
            <button onClick={this.handleChangeName}>Edit Name</button>
            <button onClick={this.handleDelete}>Delete</button>
            </Slider>
        
            <CustomDotGroup slides={3} />
          </CarouselProvider>
     
  
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

        // import { Button, Card } from 'semantic-ui-react'



    //     <div>
    //     {this.props.name}<button onClick={this.handleChangeName}>Edit Name</button>
    //     <img src={this.props.image} />
    //     <button onClick={this.handleDelete}>Delete</button>
    // </div>


//     <CustomCardSlide
//     header="Elliot Baker"
//     image="https://place-hold.it/800x800&text=Elliot&fontsize=32"
//     index={1}
//     meta="Friend"
//   />
//   <CustomCardSlide
//     header="Steve Sanders"
//     image="https://place-hold.it/800x800&text=Steve&fontsize=32"
//     index={2}
//     meta="Friend"
//   />