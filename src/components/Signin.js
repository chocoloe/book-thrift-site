import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
        signInSuccessWithAuthResult: () => false,
    },
    credentialHelper: 'none',
}

export function Signin() {
    // the authenticator used in StyledFirebaseAuth
    const auth = getAuth();
    const navigate = useNavigate()
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                navigate('/home');
            }
        })
    }, [])

    return (
        <>
        <h1>Sign in Page</h1>
        <h2>Currently not logged in </h2>
        <div className='container sign-in'>
            {/* Firebase authentication */}
            <StyledFirebaseAuth firebaseAuth={auth} uiConfig={FIREBASEUI_CONFIG_OBJ} />
        </div>
        </>
    );
}