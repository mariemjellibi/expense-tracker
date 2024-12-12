import { createContext, useContext, useState } from "react";

// Create the ThemeContext
export const ThemeContext = createContext();

// Create the ThemeProvider component
export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("light");

    // Function to toggle theme
    const changeTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Custom hook to use ThemeContext
export const useTheme = () => useContext(ThemeContext);
