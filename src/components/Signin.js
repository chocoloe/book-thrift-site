import React, { useState } from 'react';

export function Signin() {
    const [signIn, setSignIn] = useState({
        userID: "",
        passwordInput: ""
    })

    const handleChange = (event) => {
        const value = event.target.value;
        setSignIn({
            ...signIn,
            [event.target.name]: value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }
    
    return (
        <div className='container sign-in'>
            <form onSubmit={handleSubmit}>
                <label>
                User ID:
                <input type="text" value={signIn.userID} name="userID" onChange={handleChange} />
                </label>

                <label>
                Password:
                <input type="password" value={signIn.passwordInput} name="passwordInput" onChange={handleChange} />
                </label>

                <button className="btn btn-success" type="submit" >
                    <span>Sign in</span>
                </button>
            </form>   
        </div>  
    );
}