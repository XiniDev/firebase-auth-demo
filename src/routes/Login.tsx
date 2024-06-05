import React, { useEffect } from 'react';

import Auth from '@components/Auth';

const Login: React.FC = (): JSX.Element => {
    return (
        <div>
            <div className="bg-primary-950 w-full h-screen flex flex-col justify-center items-center">
                <Auth isLogin={true} />
            </div>
        </div>
    );
};

export default Login;