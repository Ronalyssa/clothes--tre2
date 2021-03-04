import React, { Component } from 'react';


class UploadTopForm extends Component {
    
 
    constructor(props) {
        super(props)
        this.handleTop = this.handleTop.bind(this)
        this.state = {
          name: '',
          image: '',
          user_id: parseInt(window.localStorage.getItem("userId"))
        }
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
           
          //let newTop = {...this.state}
          fetch("http://localhost:3000/tops", { 
              method: "POST",
              headers: {"Content-Type": "application/json"},
              body: JSON.stringify({
                name: this.state.name,
                image: this.state.image,
                user_id: this.state.user_id
              })
          })
          .then(resp => resp.json())
          .then(tops => {this.handleTop(tops)
            this.props.history.push("/closet")
          })
        }
        
        handleTop = (top) => {
          this.props.addTops(top)
        }
          
        
          render() {
            //   console.log(tops)
            return (
              <div >
                <form onSubmit={this.handleSubmit}>
                  <h3>Upload a Top</h3>
                  <input type="text" name="Bottom" value={this.state.name} onChange={this.handleName} />
                  <br/>
                  <input type="text" name="image"  value={this.state.image} onChange={this.handleImage}/>
                  <br/>
                  <input type="submit" name="submit"  />
                </form>
              </div>
            );
          }
        
    
    }

export default UploadTopForm;