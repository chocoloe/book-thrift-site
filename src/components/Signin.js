import React from 'react';
import { getAuth, EmailAuthProvider, GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const FIREBASEUI_CONFIG_OBJ = {
    signInOptions: [
        {provider: EmailAuthProvider.PROVIDER_ID},
        GoogleAuthProvider.PROVIDER_ID
    ],
    signInFlow: 'pop-up',
    callbacks: {
        // what to run after the auth is successful
        signInSuccessWithAuthResult: () => {
            
        }
    },
    credentialHelper: 'none',
}

export function Signin() {
    // the authenticator used in StyledFirebaseAuth
    const auth = getAuth();

    return (
        <div className='container sign-in'>
            {/* Firebase authentication */}
            <StyledFirebaseAuth firebaseAuth={auth} uiConfig={FIREBASEUI_CONFIG_OBJ} />
        </div>  
    );
}