import { useContext } from "react";
import DataContext from "../context/DataContext";
import request from "../api/request";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const AddTransaction = () => {
  const {
    transactions,
    setTransactions,
    transactionText,
    setTransactionText,
    transactionAmount,
    setTransactionAmount,
  } = useContext(DataContext);

  const navigate = useNavigate();

  const addTransaction = async (e) => {
    e.preventDefault();

    try {
      const res = await request.post("/transactions", {
        datetime: format(new Date(), "yyyy-MM-dd HH:mm:ss"),
        text: transactionText,
        amount: Number(transactionAmount),
      });

      if (!res.data || res.data.length === 0) {
        return;
      }

      const newTransaction = [...transactions, res.data];
      setTransactions(newTransaction);
      setTransactionText("");
      setTransactionAmount("");
      navigate("/");
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
