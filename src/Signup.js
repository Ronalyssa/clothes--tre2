import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'


class Signup extends Component {

    state = {
        username: "elisa",
        password: "wow"
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
        this.props.signup(this.state)
        // this.props.history.push("/login")

    }
 
    render() {

        return(
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                    Create an account
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
                            Sign up
                        </Button>
                    </Segment>
                </Form>
                <Message>
                    Already have an account? <a href='#'>Log In</a>
                     {/* need to redirect to login page */}
                </Message>
            </Grid.Column>
    </Grid>
        )
    }
}

export default Signup;