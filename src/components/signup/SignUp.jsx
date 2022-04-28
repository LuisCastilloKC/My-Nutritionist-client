import React, { useState } from 'react';

const SignUp = () => {
    const initialValues ={
        firstName: '',
        lastName: '',
        email: '',
        password: null,
    }

    const [inputsValue, setInputsValue] = useState(initialValues)

    const handleInputChange = (e)=>{
        const [name, value] = e.target

        setInputsValue({
            ...inputsValue,
            [name]: value
        })

    }

    return(
        <div className='signup'> 
            <form>
                <h2>Sign Up</h2>
                <label>First Name:</label>
                <input type="text" value={inputsValue.firstName} onChange={handleInputChange} name="firstName" />
                <label>Last Name:</label>
                <input type="text" value={inputsValue.lastName} onChange={handleInputChange} name="lastName" />
                <label>Email:</label>
                <input type="email" value={inputsValue.email} onChange={handleInputChange} name="email" />
                <label>Password:</label>
                <input type="password" value={inputsValue.password} onChange={handleInputChange} name="password" />
                <button type="submit">SingUp</button>
            </form>
        </div>
    );
};

export default SignUp