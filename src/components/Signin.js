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
        <form onSubmit={handleSubmit}>
            <label>
            User ID:
            <input type="text" value={userID} name="userID" onChange={handleChange} />
            <label>
            Password:
            <input type="password" value={passwordInput} name="passwordInput" onChange={handleChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>     
    );
}