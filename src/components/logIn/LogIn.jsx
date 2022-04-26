import React, { useState } from 'react';

const LogIn = () =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return(
      <div className='login'>
          <form>
            <label>Email</label>
            <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
            <label>Password</label>
            <input type="password" value={(password)} onChange={(e)=> setPassword(e.target.value)} />
            <button type="submit">Login</button>
          </form>
      </div>
    );
};

export default LogIn