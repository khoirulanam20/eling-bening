import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Check for saved user
        const savedUser = localStorage.getItem('eb_user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    const login = (userData) => {
        setUser(userData);
        localStorage.setItem('eb_user', JSON.stringify(userData));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('eb_user');
    };

    const updateProfile = (updates) => {
        const newUser = { ...user, ...updates };
        setUser(newUser);
        localStorage.setItem('eb_user', JSON.stringify(newUser));
    };

    const register = (userData) => {
        // Simulate registration
        login(userData);
    };

    const loginWithGoogle = () => {
        const dummyUser = {
            id: 'g_' + Math.floor(Math.random() * 10000),
            name: 'Pengguna Google',
            email: 'pengguna@gmail.com',
            provider: 'google'
        };
        login(dummyUser);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, register, loginWithGoogle, updateProfile }}>
            {children}
        </AuthContext.Provider>
    );
};
