import { Component } from 'react';

class SignUp extends Component {

    state = {
        username: '',
        password: '',
        firstName: '',
        lastName: ''
    }

    render(){
        return(
            <form>
                <h1>Sign Up Form</h1>
                <label>Username :</label>
                <input name='username' value={this.state.username} />
                <label>Password :</label>
                <input name='password' type= 'password' value={this.state.password} />
                <label>First Name</label>
                <input name='firstName' value={this.state.firstName} />
                <label>Last Name</label>
                <input name='lastName' value={this.state.lastName} />
                <input type='submit' value='register' />
            </form>
        )
    }

}

export default SignUp;
