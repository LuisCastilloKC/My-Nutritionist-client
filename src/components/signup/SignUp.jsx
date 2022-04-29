import React, { useState } from 'react';

const SignUp = () => {
    const initialValues ={
        firstName: '',
        lastName: '',
        email: '',
        password: null,
    }

    const [inputsValue, setInputsValue] = useState(initialValues)
    const [confirmPasswordValue, setConfirmPasswordValue] = useState('')

    const handleInputChange = (e)=>{
        const [name, value] = e.target

        setInputsValue({
            ...inputsValue,
            [name]: value
        })
    }

    const handleSubmit = ()=> {
        e.preventDefault()
        console.log(inputsValue.firstName)
        console.log(inputsValue.lastName)
        console.log(inputsValue.email)
        console.log(inputsValue.password)
    }

    return(
        <div className='signup'> 
            <form onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <label>First Name:</label>
                <input 
                    type="text" 
                    value={inputsValue.firstName} 
                    onChange={handleInputChange} 
                    name="firstName" 
                    placeholder="First Name" />
                <label>Last Name:</label>
                <input 
                    type="text" 
                    value={inputsValue.lastName} 
                    onChange={handleInputChange} 
                    name="lastName"  
                    placeholder="Last Name" />
                <label>Email:</label>
                <input 
                    type="email" 
                    value={inputsValue.email} 
                    onChange={handleInputChange} 
                    name="email" 
                    placeholder="Email" />
                <label>Password:</label>
                <input 
                    type="password" 
                    value={inputsValue.password} 
                    onChange={handleInputChange} 
                    name="password" 
                    placeholder="Password" />
                <label>Confirm Password</label>
                <input 
                    type={password}
                    value={confirmPasswordValue}
                    onChange={handleChange}
                    name="password"
                    placeholder="password" />
                <button type="submit">SingUp</button>
            </form>
        </div>
    );
};

export default SignUp