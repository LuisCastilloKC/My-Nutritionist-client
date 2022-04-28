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

        setInputsValues({
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
            </form>
        </div>
    );
};

export default SignUp