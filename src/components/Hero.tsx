import React from 'react';
import { Link } from 'react-router-dom';
import HeroSVG from '@assets/hero.svg'

const Hero: React.FC = (): JSX.Element => {
    return (
        <div className="bg-primary-950 max-w-screen-full h-screen flex flex-row justify-around items-center">
            <div className="z-10 px-10 py-4 flex flex-col space-y-2">
                <h1 className="text-7xl text-white font-bold">
                    Be On Top Of
                </h1>
                <h1 className="text-5xl text-white font-bold">
                    Your Class
                </h1>
                <div className="flex flex-row space-x-8">
                    <Link
                        className="mt-8 px-8 py-2 text-lg text-center text-white hover:text-white bg-primary-700 hover:bg-primary-800 rounded-lg"
                        to="/login"
                    >
                        Log In
                    </Link>
                    <Link
                        className="mt-8 px-8 py-2 text-lg text-center text-primary-700 hover:text-primary-800 bg-white hover:bg-slate-300 rounded-lg"
                        to="/sign-up"
                    >
                        Sign Up
                    </Link>
                </div>
            </div>
            <div className="z-10">
                <img
                    src={HeroSVG}
                    alt="hero"
                />
            </div>
        </div>
    );
};

export default Hero;