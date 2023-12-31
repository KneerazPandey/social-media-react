import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const initialState = JSON.parse(localStorage.getItem('user') || null);
    const [currentUser, setCurrentUser] = useState(initialState);

    const login = () => {
        setCurrentUser({
            id: 1, 
            username: 'Niraj Pandey', 
            image: 'https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600'
        });
    }

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(currentUser));
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{currentUser, login}}>
            {children}
        </AuthContext.Provider>
    );

}