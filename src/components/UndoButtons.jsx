import React from 'react';

const UndoButtons = ({ expenses, setExpenses, deletedExpenses, setDeletedExpenses }) => {
  const handleUndoLast = () => {
    if (deletedExpenses.length === 0) return;
    const lastDeleted = deletedExpenses[deletedExpenses.length - 1];
    setExpenses([...expenses, lastDeleted]);
    setDeletedExpenses(deletedExpenses.slice(0, -1));
  };

  const handleUndoAll = () => {
    if (deletedExpenses.length === 0) return;
    setExpenses([...expenses, ...deletedExpenses]);
    setDeletedExpenses([]);
  };

  return (
    <div className="flex justify-end gap-4 mb-6">
      <button
        onClick={handleUndoLast}
        disabled={deletedExpenses.length === 0}
        className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 disabled:opacity-50"
      >
        Undo Last
      </button>
      <button
        onClick={handleUndoAll}
        disabled={deletedExpenses.length === 0}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
      >
        Undo All
      </button>
    </div>
  );
};

export default UndoButtons;
