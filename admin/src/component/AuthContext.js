import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticate, setIsAuthenticate] = useState(false);
    return (
        <AuthContext.Provider value ={{ isAuthenticate, setIsAuthenticate }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext)
};