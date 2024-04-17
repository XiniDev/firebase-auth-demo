import React, { useEffect, useState } from 'react';
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, googleProvider } from "@config/firebase";
import GoogleSignInButton from '@components/GoogleSignInButton';

const Auth: React.FC = (): JSX.Element => {
    const loginWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (err) {
            console.error(err);
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <GoogleSignInButton onClick={loginWithGoogle}></GoogleSignInButton>
            <button onClick={logout}>Sign Out</button>
        </div>
    );
};

export default Auth;