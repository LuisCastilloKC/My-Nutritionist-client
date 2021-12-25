import { Component } from 'react';

class SignUp extends Component {

    state = {
        username: '',
        password: '',
        firstName: '',
        lastName: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return(
            <form>
                <h1>Nutritionist <br /><center>Sign Up </center></h1>
                <label>Username :</label>
                <input name='username' value={this.state.username} onChage={this.handleChange} />
                <label>Password :</label>
                <input name='password' type= 'password' value={this.state.password} />
                <label>First Name</label>
                <input name='firstName' value={this.state.firstName} />
                <label>Last Name</label>
                <input name='lastName' value={this.state.lastName} />
                <input type='submit' value='Register' />
            </form>
        )
    }

}

export default SignUp;
