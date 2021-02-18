import React, { Component } from 'react';
import UploadBottomForm from './UploadBottomForm'
import UploadTopForm from './UploadTopForm'

class CreateOutfitForm extends Component {

    state = {

        name:'',
        image: ''
        //do I need the user_id as well?
    }
    
 
    //Post fetch request
    // postTop = (topData) => {
    //     fetch("http://localhost:3000/tops", {  //w
    //         method: "POST",
    //         headers: {"Content-Type": "application/json"},
    //         body: JSON.stringify({
    //             name: topData.name,
    //             image: topData.image,
                
    //         })
    //     })
    //     .then(resp => resp.json())
    //     .then(newTop => {this.setState({  //should the state be the whole top? Also, would help so I can have a bottom as well
    //         name: topData.name,
    //         image: topData.image
    //         })
    //     })
    // }

    // postBottom = (bottomData) => {
    //     fetch("http://localhost:3000/bottoms", {
    //         method: "POST",
    //         headers: {"Content-Type": "application/json"},
    //         body: JSON.stringify({
    //             name: bottomData.name,
    //             image: bottomData.image,
                
    //         })
    //     })
    // .then(resp => resp.json())
    // .then(newBottom => {this.setState({  //should the state be the whole bottom? ...doesn't match with the state
    //         name: bottomData.name,
    //         image: bottomData.image
    //         })
    //     })
    // }
 
    render() {

        return(
            <div>
                <UploadTopForm postTop={this.postTop}/>
                <UploadBottomForm postBottom={this.postBottom}/>
            </div>
        )
    }
}

export default CreateOutfitForm;