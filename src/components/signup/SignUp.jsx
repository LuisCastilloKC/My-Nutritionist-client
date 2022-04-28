import React, { useState } from 'react';

const SignUp = () => {
    const initialValues ={
        firstName: '',
        lastName: '',
        email: '',
        password: null,
    }

    const [inputsValues, setInputsValues] = useState(initialValues)

    return(
        <div className='signup'> 
            <form>
                <h2>Sign Up</h2>
                <label>First Name:</label>
                <input type="text" value={inputsValues.firstName} onChange={handleInputChange} />
            </form>
        </div>
    );
};

export default SignUp