import React, { useState } from "react";
import { useTransaction } from "../contexts/TransactionContext";

const TransactionForm = () => {
  const [formData, setFormData] = useState({
    type: "income",
    category: "",
    amount: 0,
  });

  const { addTransaction } = useTransaction();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction(formData); 
    setFormData({
      type: "income",
      category: "",
      amount: 0,
    }); 
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Type:
          <select name="type" value={formData.type} onChange={handleChange}>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </label>
        <label>
          Category:
          <input
            type="text"
            name="category"
            placeholder="Enter a category..."
            value={formData.category}
            onChange={handleChange}
          />
        </label>
        <label>
          Amount:
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
};

export default TransactionForm;
