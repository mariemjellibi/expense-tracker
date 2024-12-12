import { createContext, useContext, useState } from "react";

const TransactionContext = createContext();

export const TransactionsProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions((prev) => [...prev, transaction]);
  };

  const deleteTransaction = (id) => {
    // Filter out the transaction with the matching id
    setTransactions((prev) => prev.filter((e) => e.id !== id));
  };

  const updateTransaction = (updatedTran) => {
    setTransactions((prev) =>
      prev.map((e) => (e.id === updatedTran.id ? updatedTran : e))
    );
  };

  const getTotals = () => {
    const income = transactions
      .filter((e) => e.type === "income")
      .reduce((acc, e) => acc + e.amount, 0);

    const expenses = transactions
      .filter((e) => e.type === "expense")
      .reduce((acc, e) => acc + e.amount, 0);

    return { income, expenses };
  };

  return (
    <TransactionContext.Provider
      value={{ transactions, addTransaction, deleteTransaction, updateTransaction, getTotals }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransaction = () => useContext(TransactionContext);
