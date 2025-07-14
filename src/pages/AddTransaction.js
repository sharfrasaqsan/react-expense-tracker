import { useContext } from "react";
import DataContext from "../context/DataContext";
import request from "../api/request";

const AddTransaction = () => {
  const {
    transactions,
    setTransactions,
    transactionText,
    setTransactionText,
    transactionAmount,
    setTransactionAmount,
  } = useContext(DataContext);

  const addTransaction = async (e) => {
    e.preventDefault();

    try {
      const res = await request.post("/transactions", {
        datetime: Date(),
        text: transactionText,
        amount: transactionAmount,
      });

      if (!res.data || res.data.length === 0) {
        return;
      }

      const newTransaction = [...transactions, res.date];
      setTransactions(newTransaction);
      setTransactionText("");
      setTransactionAmount("");
    } catch (err) {
      alert(err.message || "Failed to add the transaction!");
    }
  };

  return (
    <div>
      <h2>Add Transaction</h2>
      <form onSubmit={addTransaction}>
        <label htmlFor="text">Decription: </label>
        <input
          type="text"
          value={transactionText}
          onChange={(e) => setTransactionText(e.target.value)}
          required
        />
        <label htmlFor="amount">Amount: </label>
        <input
          type="number"
          value={transactionAmount}
          onChange={(e) => setTransactionAmount(e.target.value)}
          required
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTransaction;
