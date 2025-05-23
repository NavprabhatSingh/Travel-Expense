import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import UndoButtons from './components/UndoButtons';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';

const App = () => {
  // Load saved expenses from localStorage
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem('expenses');
    return saved ? JSON.parse(saved) : [];
  });

  // Save expenses to localStorage on every change
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const [deletedExpenses, setDeletedExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({
    description: '',
    amount: '',
    category: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewExpense({ ...newExpense, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = expenses.length ? expenses[expenses.length - 1].id + 1 : 1;
    const amount = parseFloat(newExpense.amount);
    if (!newExpense.description || isNaN(amount) || !newExpense.category) return;
    setExpenses([...expenses, { id, ...newExpense, amount }]);
    setNewExpense({ description: '', amount: '', category: '' });
  };

  const handleDelete = (id) => {
    const deleted = expenses.find((item) => item.id === id);
    if (deleted) {
      setDeletedExpenses([...deletedExpenses, deleted]);
      setExpenses(expenses.filter((item) => item.id !== id));
    }
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />
        
        {/* Main content section */}
        <main className="flex-grow pt-24 px-4 sm:px-6 lg:px-8 w-full max-w-6xl mx-auto">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">
                    Travel Expense Tracker
                  </h1>
                  <ExpenseForm
                    newExpense={newExpense}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                  />
                  <div className="flex justify-end mb-4">
                    <UndoButtons
                      expenses={expenses}
                      setExpenses={setExpenses}
                      deletedExpenses={deletedExpenses}
                      setDeletedExpenses={setDeletedExpenses}
                    />
                  </div>
                  <ExpenseList items={expenses} onDelete={handleDelete} />
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </main>

        {/* Footer fixed to bottom if content is short */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;