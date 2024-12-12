import React from 'react'
import { useTheme } from '../contexts/ThemeContext'
const ThemeButton = () => {
    const {theme,changeTheme}=useTheme();
  return (
    <button
    onClick={changeTheme}
    style={{
        padding: "10px 20px",
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#333" : "#fff",
        border: "none",
        cursor: "pointer",
        borderRadius: "5px",
      }}
    
    >
        switch to {theme ==="light"?"dark":"light"}
    </button>
  )
}

export default ThemeButton