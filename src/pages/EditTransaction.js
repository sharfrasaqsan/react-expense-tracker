import { useContext, useEffect } from "react";
import DataContext from "../context/DataContext";
import "../styles/addtransaction.css";
import { useParams } from "react-router-dom";

const EditTransaction = () => {
  const {
    transactions,
    editTransactionText,
    setEditTransactionText,
    editTransactionAmount,
    setEditTransactionAmount,
    editTransaction,
    editTransactionType,
    setEditTransactionType,
  } = useContext(DataContext);

  const { id } = useParams();
  const transacation = transactions.find((i) => i.id === id);

  useEffect(() => {
    if (transacation) {
      setEditTransactionText(transacation.text);
      setEditTransactionAmount(transacation.amount);
      setEditTransactionType(transacation.type);
    }
  }, [
    transacation,
    setEditTransactionText,
    setEditTransactionAmount,
    setEditTransactionType,
  ]);

  return (
    <div className="form-card">
      <h2 className="form-title">Edit Transaction</h2>
      {transacation ? (
        <form onSubmit={(e) => e.preventDefault()} className="form">
          <label htmlFor="text">Decription: </label>
          <input
            type="text"
            value={editTransactionText}
            onChange={(e) => setEditTransactionText(e.target.value)}
            required
          />

          <div className="radio-group">
            <label>Income</label>
            <input
              type="radio"
              name="type"
              value="income"
              checked={editTransactionType === "income"}
              onChange={() => setEditTransactionType("income")}
              tabIndex={0}
            />

            <label>Expense</label>
            <input
              type="radio"
              name="type"
              value="expense"
              checked={editTransactionType === "expense"}
              onChange={() => setEditTransactionType("expense")}
              tabIndex={0}
            />
          </div>

          <label htmlFor="amount">Amount: </label>
          <input
            type="number"
            value={editTransactionAmount}
            onChange={(e) => setEditTransactionAmount(e.target.value)}
            required
          />

          <button
            type="submit"
            onClick={() => editTransaction(transacation.id)}
            className="submit-btn"
          >
            Update
          </button>
        </form>
      ) : (
        <p>No transaction here!</p>
      )}
    </div>
  );
};

export default EditTransaction;
