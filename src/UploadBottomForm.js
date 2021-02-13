import React, { Component } from 'react';

class UploadBottomForm extends Component {

  state = {
    name: '',
    image: '',
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
    this.props.postBottom(this.state)
    this.state.name = ''
    this.state.image = ''
  }


  

  render() {
    return (
      <div >
        <form onSubmit={this.handleSubmit}>
          <h3>Upload a Bottom</h3>
          <input type="text" name="Bottom" onChange={this.handleName} />
          <br/>
          <input type="file" name="image" onChange={this.handleImage}/>
          <br/>
          <input type="submit" name="submit"  />
        </form>
      </div>
    );
  }

}

export default UploadBottomForm;