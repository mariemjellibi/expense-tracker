import NavBar from "./components/NavBar";
import { useTheme } from "./contexts/ThemeContext";
import ThemeButton from "./components/ThemeButton";
import TransactionForm from "./components/TransactionForm";
import Charts from "./components/Dashboard/Charts";
const App = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen p-6 ${
        theme === "light" ? "bg-gray-100 text-gray-800" : "bg-gray-900 text-gray-100"
      }`}
    >
      <NavBar />
      <div className="container mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">
            Welcome to Your Personal Expense Tracker
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Manage your finances seamlessly with our user-friendly interface.
          </p>
        </header>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2">
            <TransactionForm />
            <Charts/>
          </div>
          <div className="w-full md:w-1/2">
            <ThemeButton />
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default App;
