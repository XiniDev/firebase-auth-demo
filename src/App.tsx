import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import AppLayout from '@components/AppLayout'
import AuthProvider from '@components/AuthProvider'
import ProtectedRoute from '@components/ProtectedRoute'

import Home from '@routes/Home.tsx'
import Login from '@routes/Login'
import SignUp from '@routes/SignUp'
import Dashboard from '@routes/Dashboard'

const router = createBrowserRouter([{
    path: "/",
    element: <AppLayout />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/sign-up",
            element: <SignUp />,
        },
        {
            path: "/",
            element: <ProtectedRoute />,
            children: [
                {
                    path: "/dashboard",
                    element: <Dashboard />,
                }
            ]
        },
    ]
}]);

const App: React.FC = (): JSX.Element => {
    return (
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    );
};

export default App;