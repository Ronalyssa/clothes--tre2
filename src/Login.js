import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'


class Login extends Component {

    state = {
        username: "ronalyssa",
        password: "hello"
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

        this.props.login(this.state)
        // this.props.history.push("/welcomePage")

    }
    
 
    render() {

        return(
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                        Log-in to your account
                    </Header>
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