import React from 'react';

const LogIn = () => {

    return(
        <div> 
            <form>
            <h1> Log In</h1>
                <label>Log In</label>
                <input type="text" name="Login" />
                <label>Password</label>
                <input type="password" name="password" />
                <input type="submit" value="Password" />
                
            </form>
        </div>
    );
};

export default LogIn;