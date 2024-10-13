import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseSummary from "./components/ExpenseSummary";

const App = () => {
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem("expenses");
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  const [editExpense, setEditExpense] = useState(null);

  useEffect(() => {
    if (expenses.length > 0)
      localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  return (
    <div className="app">
      <Header />

      <div className="main-content">
        <div className="left-column">
          <ExpenseForm
            expenses={expenses}
            setExpenses={setExpenses}
            editExpense={editExpense}
            setEditExpense={setEditExpense}
          />
        </div>

        <div className="right-column">
          <ExpenseSummary
            expenses={expenses}
            setExpenses={setExpenses}
            setEditExpense={setEditExpense}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
