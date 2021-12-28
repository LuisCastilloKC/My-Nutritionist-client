import axios from 'axios';
import React, { Component } from 'react';

class LogInForm extends Component {
    
    handleSubmit = (e) =>{
        e.preventDefault();
        
        const data = {
            username: this.username,
            password: this.password
        }
        axios.post('http:localhost:3000/users', data)
            .then(res =>{
                localStorage.setItem('token', res.token);
            })
            .catch(err =>{
                console.log(err)
            })
    }

render(){ 
        return(
            <div> 
                <form onSubmit={this.handleSubmit}>
                <h1>Login</h1>
                    <label>Username</label>
                    <input type="text" name="username" placeholder="Username" onChange={e => this.username = e.target.value} />
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Password" onChange={e => this.password = e.target.value} />
                    <input type="submit" value="Login" />
                
                </form>
            </div>
        );
    };
}

export default LogInForm;