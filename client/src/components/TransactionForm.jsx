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
    <div className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-lg shadow-md max-w-md md:max-w-lg mx-auto">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-6 text-center">
        Add New Transaction
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Responsive Grid for Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Type Selector */}
          <div>
            <label
              htmlFor="type"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Type
            </label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm dark:border-gray-700 dark:bg-gray-700 dark:text-gray-200 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>

          {/* Category Input */}
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              placeholder="Enter a category..."
              value={formData.category}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm dark:border-gray-700 dark:bg-gray-700 dark:text-gray-200 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Amount Input */}
        <div>
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Amount
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm dark:border-gray-700 dark:bg-gray-700 dark:text-gray-200 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 focus:ring focus:ring-blue-500"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default TransactionForm;
