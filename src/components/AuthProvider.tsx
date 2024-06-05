import React, { createContext, PropsWithChildren, useEffect, useState } from 'react';
import { onAuthStateChanged, Unsubscribe, User } from 'firebase/auth';
import { auth } from '@config/firebase';

export const AuthContext = createContext<User | null>(null);

type AuthProviderProps = PropsWithChildren;

const AuthProvider: React.FC<AuthProviderProps> = ({children}: AuthProviderProps): JSX.Element => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<Boolean>(true);

    useEffect(() => {
        const unsubscribe: Unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoading(false);
            if (currentUser) {
                setUser(currentUser);
            }
            else setUser(null);
        });
        return () => {
            if (unsubscribe) unsubscribe();
        };
    }, []);

    return (
        <AuthContext.Provider value={user}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;