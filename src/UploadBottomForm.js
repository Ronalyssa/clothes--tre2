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
      image: e.target.value
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
          <input type="text" name="Bottom" value={this.state.name} onChange={this.handleName} />
          <br/>
          <input type="text" name="image" value={this.state.image} onChange={this.handleImage}/>
          <br/>
          <input type="submit" name="submit"  />
        </form>
      </div>
    );
  }

}

export default UploadBottomForm;