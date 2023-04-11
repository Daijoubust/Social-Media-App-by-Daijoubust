import { useState,createContext,useEffect } from 'react';

export const DarkModeContext = createContext();

export const DarkModeContextProvider = ({children}) => {
    const [darkMode,setDarkMode] = useState(false
    );

    const toggle = () => {
        setDarkMode(!darkMode);
    }

    useEffect(() => {
        localStorage.setItem("darkMode",darkMode)
    }, [darkMode]);

    return (
        <DarkModeContext.Provider value={{darkMode , toggle}}>
            {children}
        </DarkModeContext.Provider>
    );
};