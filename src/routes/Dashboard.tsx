import React from 'react'
import Navigation from '@components/Navigation';

const Dashboard: React.FC = (): JSX.Element => {
    return (
        <div className="bg-primary-950 max-w-screen-full h-screen flex flex-row justify-left items-center">
            <Navigation />
            <h1 className="mx-auto text-7xl text-white font-bold">
                WELCOME TO DASHBOARD
            </h1>
        </div>
    );
};

export default Dashboard
