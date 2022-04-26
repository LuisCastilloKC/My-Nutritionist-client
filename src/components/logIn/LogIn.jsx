import React, { useState } from 'react';

const LogIn = () =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const validationForm = () => {
      return email.length > 0 && password.length > 0
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return(
      <div className='login'>
          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Your email" />
            <label>Password</label>
            <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Your password" />
            <button type="submit" disabled={!validationForm()}>Login</button>
          </form>
      </div>
    );
};

export default LogIn