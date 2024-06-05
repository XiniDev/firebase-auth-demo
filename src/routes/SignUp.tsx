import React, { useEffect } from 'react';

import Auth from '@components/Auth';

const SignUp: React.FC = (): JSX.Element => {
    return (
        <div>
            <div className="bg-primary-950 w-full h-screen flex flex-col justify-center items-center">
                <Auth isLogin={false} />
            </div>
        </div>
    );
};

export default SignUp;