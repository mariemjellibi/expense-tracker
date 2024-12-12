import React from "react";
import { useTheme } from "./contexts/ThemeContext";
import ThemeButton from "./components/ThemeButton";
import TransactionForm from "./components/TransactionForm";
const App = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#f9f9f9" : "#121212",
        color: theme === "light" ? "#000" : "#fff",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h1>Theme Context Example</h1>
      <ThemeButton />
      <TransactionForm/>
    </div>
  );
};

export default App;
