import React from 'react'
import { Link } from 'react-router-dom';
import { auth } from "@config/firebase";

const Navigation: React.FC = (): JSX.Element => {
    const navLinks = [
        ["Dashboard", "/dashboard"],
    ];

    const renderNavLinks = () => {
        const links: JSX.Element[] = [];

        navLinks.forEach(element => {
            links.push(
                <Link
                    key={element[1]}
                    className="hover:bg-primary-950 flex justify-center items-center w-full py-4 text-white text-center text-lg font-bold"
                    to={element[1]}
                >
                    {element[0]}
                </Link>
            );
        });

        return (
            <div className="w-full h-1/2 flex flex-col justify-center items-center">
                {links}
            </div>
        );
    };

    return (
        <div className="bg-primary-900 w-[300px] h-screen flex flex-col justify-between items-center">
            <div className="text-white">header in nav</div>
            {renderNavLinks()}
            {auth.currentUser?.email}
        </div>
    );
};

export default Navigation
