import React from 'react';

const ExpenseForm = ({ newExpense, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
      <input
        type="text"
        name="description"
        value={newExpense.description}
        onChange={onChange}
        placeholder="Description"
        className="p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="number"
        name="amount"
        value={newExpense.amount}
        onChange={onChange}
        placeholder="Amount"
        className="p-2 border border-gray-300 rounded"
        required
        min="0.01"
        step="0.01"
      />
      <select
        name="category"
        value={newExpense.category}
        onChange={onChange}
        className="p-2 border border-gray-300 rounded"
        required
      >
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Hotel">Hotel</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Utility">Utility</option>
        <option value="Other">Other</option>
      </select>
      <div className="sm:col-span-2 md:col-span-3">
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
