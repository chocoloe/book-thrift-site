import React, { useState } from 'react';
import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const FIREBASEUI_CONFIG_OBJ = {
    signInOptions: [
        {provider: EmailAuthProvider.PROVIDER_ID},
        GoogleAuthProvider.PROVIDER_ID
    ],
    signInFlow: 'pop-up',
    callbacks: {
        // what to run after the auth is successful
        signInSuccessWithAuthResult: () => false
    },
    credentialHelper: 'none',
}

export function Signin() {
    // the authenticator used in StyledFirebaseAuth
    const auth = getAuth();

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
            {/* Firebase authentication */}
            <StyledFirebaseAuth firebaseAuth={auth} uiConfig={FIREBASEUI_CONFIG_OBJ} />
        </div>  
    );
}