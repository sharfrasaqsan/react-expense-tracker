import { useContext, useEffect } from "react";
import DataContext from "../context/DataContext";

import { useParams } from "react-router-dom";

const AddTransaction = () => {
  const {
    transactions,
    editTransactionText,
    setEditTransactionText,
    editTransactionAmount,
    setEditTransactionAmount,
    editTransaction,
  } = useContext(DataContext);

  const { id } = useParams();
  const transacation = transactions.find((i) => i.id === id);

  useEffect(() => {
    if (transacation) {
      setEditTransactionText(transacation.text);
      setEditTransactionAmount(transacation.amount);
    }
  }, [transacation, setEditTransactionText, setEditTransactionAmount]);

  return (
    <div>
      <h2>Edit Transaction</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="text">Decription: </label>
        <input
          type="text"
          value={editTransactionText}
          onChange={(e) => setEditTransactionText(e.target.value)}
          required
        />
        <label htmlFor="amount">Amount: </label>
        <input
          type="number"
          value={editTransactionAmount}
          onChange={(e) => setEditTransactionAmount(e.target.value)}
          required
        />
        <button type="submit" onClick={() => editTransaction(transacation.id)}>
          Update
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
