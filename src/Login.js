import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import WelcomePage from './WelcomePage';
import {
    Switch,
    Route,
    Link
  } from "react-router-dom";


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
        this.props.login(this.state)

    }
    
    render() {
        // console.log(this.state)
        return(
            <div>
                {/* <h4>Login</h4>
                <form onSubmit={this.handleSubmit}>
                    <input name={'username'} value={this.state.userEntry} onChange={this.handleUser}/>
                    <input name={'password'} value={this.state.passwordEntry} onChange={this.handlePassword} />
                    <input type='submit' value='login' />
                </form> */}

                    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                        <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h2' color='teal' textAlign='center'>
                            <Image src='/logo.png' /> Log-in to your account
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
                        </Message>
                        </Grid.Column>
                    </Grid>

                    
                    <Link to='/WelcomePage'>
                        <WelcomePage/>
                    </Link>


            </div>
        )
    }
}

export default Login;