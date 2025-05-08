import React from 'react';

const ExpenseList = ({ items, onDelete }) => {
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 2,
    }).format(value);
  };

  const total = items.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="overflow-x-auto">
      <table className="table-auto border-collapse w-full min-w-[600px]">
        <thead>
          <tr>
            <th className="border px-4 py-2">Description</th>
            <th className="border px-4 py-2">Amount</th>
            <th className="border px-4 py-2">Category</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td className="border px-4 py-2">{item.description}</td>
              <td className="border px-4 py-2">{formatCurrency(item.amount)}</td>
              <td className="border px-4 py-2">{item.category}</td>
              <td className="border px-4 py-2 text-center">
                <button
                  onClick={() => onDelete(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td className="border px-4 py-2 font-bold">Total</td>
            <td className="border px-4 py-2 font-bold">{formatCurrency(total)}</td>
            <td className="border px-4 py-2"></td>
            <td className="border px-4 py-2"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;
