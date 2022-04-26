import React, { useState } from 'react';

const LogIn = () =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return(
      <div>
          <form>
            <label>User Name</label>
            <input type="text" />
            <label>Password</label>
            <input type="text" />
            <button>Login</button>
          </form>
      </div>
    );
};

export default LogIn