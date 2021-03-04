import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
// import { useHistory } from "react-router-dom";


class Login extends Component {

    state = {
        username: "ronalyssa",
        password: "hello",
        error: ''
    }

    handleUser = (e) => {
        this.setState({
           username: e.target.value
        })
    }

    handlePassword = (e) => {
        this.setState({
           password: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        //fetch that specific user based on what is entered in the form 
        // post body and username and password 
        //user back or error
        //user- success case
        //  console.log(this.props.login)

        fetch('http://localhost:3000/api/v1/auth', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(this.state)
          })
          .then(resp => resp.json())
          .then(data => {
            if (data.error){
              this.setState({
                  error: data.error
              })
            } else {
                // what to do if successful?????
            }
          })
        
       
    }
    
 
    render() {
        // console.log(this.props)
        return(
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                        Log-in to your account
                    </Header>
                    {this.state.error ? <h4 style={{color: 'red'}}>{this.state.error}</h4> : null}
                    <Form size='large' onSubmit={this.handleSubmit}>
                        <Segment stacked>
                            <Form.Input fluid icon='username' iconPosition='left' placeholder='UserName'  onChange={this.handleUser}/>
                            <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                type='password'
                                onChange={this.handlePassword}
                            />

                            <Button color='teal' fluid size='large'>
                                Login
                            </Button>
                        </Segment>
                    </Form>
                    <Message>
                        New to us? <a href='#'>Sign Up</a> 
                        {/* need to redirect to signup page */}

                    </Message>
                
                </Grid.Column>
        </Grid>
        )
    }
}

export default Login;


// this.props.login(this.state)
// this.props.history.push("/welcomePage")