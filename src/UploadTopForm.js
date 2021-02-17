import React, { Component } from 'react';

class UploadTopForm extends Component {

    state = {
        name: '',
        image: null
      }
    
      handleName = (e) => {
        this.setState({
          name: e.target.value
        })
      }
    
      handleImage = (e) => {
        
        this.setState({
          image: e.target.files[0]
        })
      
      }
    
      handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('name', this.state.name);
        formData.append('image', this.state.image);
        formData.append('user_id', 3);
        this.props.postTop(formData)
        for (var pair of formData.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
        }
       
    //    console.log(formData)
      }
    
    
      
    
      render() {
        return (
          <div >
            <form onSubmit={this.handleSubmit}>
              <h3>Upload a Top</h3>
              <input type="text" name="top" onChange={this.handleName} />
              <br/>
              <input type="file" name="image" onChange={this.handleImage}/>
              <br/>
              <input type="submit" name="submit"  />
            </form>
          </div>
        );
      }
    

}

export default UploadTopForm;