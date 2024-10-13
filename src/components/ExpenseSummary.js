import React, { useEffect, useState } from "react";
import "./styles/ExpenseSummary.css";
import ExpenseCard from "./ExpenseCard";

const ExpenseSummary = ({ expenses, setExpenses, setEditExpense }) => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState(expenses);

  const handleDelete = (id) => {
    const updatedExpenses = expenses.filter((exp) => exp.id !== id);
    setExpenses(updatedExpenses);
  };

  const calculateTotal = () => {
    return expenses.reduce((total, expense) => {
      const amount = parseFloat(expense.amount);
      return total + (isNaN(amount) ? 0 : amount);
    }, 0);
  };

  useEffect(() => {
    const filteredExpenses = expenses.filter((expense) => {
      // Safely check if category and date exist before calling toLowerCase
      const category = expense.category || "";
      const date = expense.date || "";

      return (
        category.toLowerCase().includes(search.toLowerCase()) ||
        date.toLowerCase().includes(search.toLowerCase())
      );
    });

    setSearchResults(filteredExpenses);
  }, [search, expenses]);

  return (
    <div className="expense-summary">
      <h2 className="expense-summary-title">Expense Summary</h2>

      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search by category, or date"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      {expenses.length === 0 ? (
        <p className="no-expenses">No expenses added yet</p>
      ) : searchResults.length > 0 ? (
        <>
          <table className="expense-table">
            <thead>
              <tr>
                <th>Amount</th>
                <th>Category</th>
                <th>Date</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {searchResults.map((expense) => (
                <ExpenseCard
                  key={expense.id}
                  expense={expense}
                  handleDelete={handleDelete}
                  handleEdit={() => setEditExpense(expense)}
                />
              ))}
            </tbody>
          </table>

          <div className="expense-total">
            <p>Total: ${calculateTotal().toFixed(2)}</p>
          </div>
        </>
      ) : (
        <p className="no-expenses">No expenses match your search.</p>
      )}
    </div>
  );
};

export default ExpenseSummary;
