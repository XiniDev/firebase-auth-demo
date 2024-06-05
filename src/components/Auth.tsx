import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth, googleProvider } from "@config/firebase";
import GoogleSignInButton from '@components/GoogleSignInButton';

type AuthProps = {
    isLogin: Boolean;
}

const Auth: React.FC<AuthProps> = ({isLogin}: AuthProps): JSX.Element => {
    const [registerEmail, setRegisterEmail] = useState<string>("");
    const [registerPassword, setRegisterPassword] = useState<string>("");
    const [loginEmail, setLoginEmail] = useState<string>("");
    const [loginPassword, setLoginPassword] = useState<string>("");
    const [error, setError] = useState<string>("");

    const navigate = useNavigate();

    const validateEmail = (email: string) => {
        // Must be a valid email
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const validatePassword = (password: string) => {
        // Password must be at least 8 characters long and contain at least one number.
        const regex = /^(?=.*[0-9]).{8,}$/;
        return regex.test(password);
    };

    const register = async () => {
        if (!validateEmail(registerEmail)) {
            setError("Invalid email format");
            return;
        }

        if (!validatePassword(registerPassword)) {
            setError("Password must be at least 8 characters long and contain at least one number");
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            navigate("/login");
        } catch (err) {
            console.error("Registration Error: ", err);
            setError("Registration failed. Please try again.");
        }
    };

    const login = async () => {
        if (!validateEmail(loginEmail)) {
            setError("Invalid email format");
            return;
        }

        try {
            await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
            navigate("/dashboard");
        } catch (err) {
            console.error("Login Error: ", err);
            setError("Login failed. Please check your credentials and try again.");
        }
    };

    const loginWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            navigate("/dashboard");
        } catch (err) {
            console.error("Google Sign-in Error: ", err);
            setError("Google sign-in failed. Please try again.");
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
            navigate("/login");
        } catch (err) {
            console.error("Logout Error: ", err);
            setError("Logout failed. Please try again.");
        }
    };

    const renderSignUp = () => {
        return (
            <div className="flex flex-col justify-center items-center">
                <div className="my-3 text-2xl text-white">Create An Account</div>
                {error && <div className="text-red-500">{error}</div>}
                <div className="flex flex-col space-y-4 w-[300px]">
                    <input
                        className="px-1 text-lg"
                        placeholder="Email..."
                        onChange={(event) => {
                            setRegisterEmail(event.target.value);
                            setError("");
                        }}
                    />
                    <input
                        className="px-1 text-lg"
                        placeholder="Password..."
                        type="password"
                        onChange={(event) => {
                            setRegisterPassword(event.target.value);
                            setError("");
                        }}
                    />
                    <button
                        className="mx-auto w-1/2 px-4 py-1 text-lg text-center text-white hover:text-white bg-primary-700 hover:bg-primary-800 rounded-lg"
                        onClick={register}
                    >
                        Sign Up
                    </button>
                </div>
                <div className="flex flex-row justify-center items-center gap-x-2 my-4 text-base text-center text-white">
                    Already have an account?
                    <Link
                        className="text-primary-300"
                        to="/login"
                    >
                        Login
                    </Link>
                </div>
            </div>
        );
    };

    const renderLogin = () => {
        return (
            <div className="flex flex-col justify-center items-center">
                <div className="my-3 text-2xl text-white">Login</div>
                {error && <div className="text-red-500">{error}</div>}
                <div className="flex flex-col space-y-4 w-[300px]">
                    <input
                        className="px-1 text-lg"
                        placeholder="Email..."
                        onChange={(event) => {
                            setLoginEmail(event.target.value);
                            setError("");
                        }}
                    />
                    <input
                        className="px-1 text-lg"
                        placeholder="Password..."
                        type="password"
                        onChange={(event) => {
                            setLoginPassword(event.target.value);
                            setError("");
                        }}
                    />
                    <button
                        className="mx-auto w-1/2 px-4 py-1 text-lg text-center text-white hover:text-white bg-primary-700 hover:bg-primary-800 rounded-lg"
                        onClick={login}
                    >
                        Login
                    </button>
                </div>
                <div className="flex flex-row justify-center items-center gap-x-2 my-4 text-base text-center text-white">
                    Don't have an account?
                    <Link
                        className="text-primary-300"
                        to="/sign-up"
                    >
                        Sign Up
                    </Link>
                </div>
            </div>
        );
    };

    return (
        <div className="px-8 py-4 flex flex-col space-y-4 justify-center items-center rounded-xl border-solid border-2 border-white">
            {isLogin ? renderLogin() : renderSignUp()}
            <div className="relative w-full flex flex-row pb-5 items-center">
                <div className="flex-grow border-solid border-t border-b-white"/>
                <span className="flex-shrink mx-4 text-base text-white">OR</span>
                <div className="flex-grow border-solid border-t border-b-white"/>
            </div>
            <GoogleSignInButton onClick={loginWithGoogle}></GoogleSignInButton>
            {auth.currentUser?.email}
            <button
                className="mx-auto w-1/2 px-4 py-1 text-lg text-center text-white hover:text-white bg-primary-700 hover:bg-primary-800 rounded-lg"
                onClick={logout}
            >
                Sign Out
            </button>
        </div>
    );
};

export default Auth;