import { useState,  useEffect ,createContext } from "react";

export const DarkModeContext = createContext();

export const DarkModeContextProvider = ({children}) => {
    const initialState = JSON.parse(localStorage.getItem('darkMode') || false); 
    const [darkMode, setDarkMode] = useState(initialState);

    const toggle = () => {
        setDarkMode(!darkMode);
    }

    useEffect(() => {
        localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

    return (
        <DarkModeContext.Provider value={{ darkMode, toggle }}>
            {children}
        </DarkModeContext.Provider>
    );

}