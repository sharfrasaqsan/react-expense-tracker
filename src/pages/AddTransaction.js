import { useContext } from "react";
import DataContext from "../context/DataContext";
import request from "../api/request";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import "../styles/addtransaction.css";

const AddTransaction = () => {
  const {
    transactions,
    setTransactions,
    transactionText,
    setTransactionText,
    transactionAmount,
    setTransactionAmount,
    transactionType,
    setTransactionType,
  } = useContext(DataContext);

  const navigate = useNavigate();

  const addTransaction = async (e) => {
    e.preventDefault();

    try {
      const res = await request.post("/transactions", {
        datetime: format(new Date(), "yyyy-MM-dd HH:mm:ss"),
        text: transactionText,
        amount: Math.abs(Number(transactionAmount)),
        type: transactionType,
      });

      if (!res.data || res.data.length === 0) {
        return;
      }

      setTransactions([...transactions, res.data]);
      setTransactionText("");
      setTransactionAmount("");
      setTransactionType("income");
      navigate("/");
    } catch (err) {
      alert(err.message || "Failed to add the transaction!");
    }
  };

  return (
    <div className="form-card">
      <h2 className="form-title">Add Transaction</h2>
      <form onSubmit={addTransaction} className="form">
        <label htmlFor="text">Decription: </label>
        <input
          type="text"
          value={transactionText}
          onChange={(e) => setTransactionText(e.target.value)}
          required
        />

        <div className="radio-group">
          <label>Income</label>
          <input
            type="radio"
            name="type"
            value="income"
            checked={transactionType === "income"}
            onChange={() => setTransactionType("income")}
            tabIndex={0}
          />

          <label>Expense</label>
          <input
            type="radio"
            name="type"
            value="expense"
            checked={transactionType === "expense"}
            onChange={() => setTransactionType("expense")}
            tabIndex={0}
          />
        </div>

        <label htmlFor="amount">Amount: </label>
        <input
          type="number"
          value={transactionAmount}
          onChange={(e) => setTransactionAmount(e.target.value)}
          required
        />
        <button type="submit" className="submit-btn">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
