import React, { Component } from 'react';


class Login extends Component {
    
    state = {
        userEntry: '',
        passwordEntry: ''
    }


    handleUser = (e) => {

        let user = this.props.user
        
        this.setState({
        //    userEntry: e.target.value
           userEntry: user
        })
    }

    handlePassword = (e) => {
        let password = this.props.password
        this.setState({
        //    passwordEntry: e.target.value
           passwordEntry: password
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log("I'm signed In")
    }
    
    render() {
        // console.log(this.state)
        return(
            <div>
                <h4>Login</h4>
                <form onSubmit={this.handleSubmit}>
                    <input name={'username'} value={this.state.userEntry} onChange={this.handleUser}/>
                    <input password={'password'} value={this.state.passwordEntry} onChange={this.handlePassword} />
                    <input type='submit' value='login' />
                </form>
            </div>
        )
    }
}

export default Login;