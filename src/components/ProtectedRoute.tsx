import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import AppLayout from '@components/AppLayout';

const ProtectedRoute: React.FC = (): JSX.Element => {
    const user = useContext(AuthContext);

    if (!user) return (
        <Navigate to="/login" replace={true} />
    );
    else return (
        <div>
            <AppLayout />
        </div>
    );
};

export default ProtectedRoute
