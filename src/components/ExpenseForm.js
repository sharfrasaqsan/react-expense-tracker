import React, { useEffect, useState } from "react";
import "./styles/ExpenseForm.css";

const ExpenseForm = ({
  expenses,
  setExpenses,
  editExpense,
  setEditExpense,
}) => {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [customCategory, setCustomCategory] = useState("");

  useEffect(() => {
    if (editExpense) {
      setAmount(editExpense.amount);
      if (
        ["Food", "Transportation", "Utilities", "Entertainment"].includes(
          editExpense.category
        )
      ) {
        setCategory(editExpense.category);
        setCustomCategory("");
      } else {
        setCategory("Other");
        setCustomCategory(editExpense.category);
      }
      setDate(editExpense.date);
    }
  }, [editExpense]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!amount || !category || !date) {
      alert("Please enter expense details");
      return;
    }

    if (new Date(date) > new Date()) {
      alert("Please enter a valid date");
      return;
    }

    const finalCategory = category === "Other" ? customCategory : category;

    if (editExpense) {
      const updatedExpense = expenses.map((exp) =>
        exp.id === editExpense.id
          ? { ...exp, amount, category: finalCategory, date }
          : exp
      );
      setExpenses(updatedExpense);
      setAmount("");
      setCategory("");
      setCustomCategory("");
      setDate("");
      setEditExpense(null);
    } else {
      const id = expenses.length ? expenses[expenses.length - 1].id + 1 : 1;
      const addExpense = {
        id,
        amount: parseFloat(amount),
        category: finalCategory,
        date,
      };
      const listExpenses = [...expenses, addExpense];
      setExpenses(listExpenses);
      setAmount("");
      setCategory("");
      setCustomCategory("");
      setDate("");
    }
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <label htmlFor="amount">Amount: </label>
      <input
        type="number"
        name="amount"
        id="amount"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />

      <label htmlFor="category">Category: </label>
      <select
        name="category"
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      >
        <option value="" disabled>
          Select Category
        </option>
        <option value="Food">Food</option>
        <option value="Transportation">Transportation</option>
        <option value="Utilities">Utilities</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Other">Other</option>
      </select>

      {category === "Other" && (
        <>
          <label htmlFor="custom-category">Enter Custom Category: </label>
          <input
            type="text"
            name="custom-category"
            id="custom-category"
            placeholder="Enter custom category"
            value={customCategory}
            onChange={(e) => setCustomCategory(e.target.value)}
            required
          />
        </>
      )}

      <label htmlFor="date">Date: </label>
      <input
        type="date"
        name="date"
        id="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />

      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
