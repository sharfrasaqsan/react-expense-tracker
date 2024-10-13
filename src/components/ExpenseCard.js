import React from "react";
import "./styles/ExpenseCard.css";
import "font-awesome/css/font-awesome.min.css"; // Import Font Awesome

const ExpenseCard = ({ expense, handleDelete, handleEdit }) => {
  return (
    <tr>
      <td>${parseFloat(expense.amount).toFixed(2)}</td>
      <td>{expense.category}</td>
      <td>{expense.date}</td>
      <td>
        <button onClick={handleEdit} className="icon-button">
          <i className="fa fa-pencil" aria-hidden="true"></i>
        </button>
      </td>
      <td>
        <button
          onClick={() => handleDelete(expense.id)}
          className="icon-button"
        >
          <i className="fa fa-trash" aria-hidden="true"></i>
        </button>
      </td>
    </tr>
  );
};

export default ExpenseCard;
