import { useContext } from "react";
import DataContext from "../context/DataContext";
import TransactionItem from "./TransactionItem";
import request from "../api/request";
import "../styles/transactionlist.css";

const TransactionList = () => {
  const { transactions, setTransactions } = useContext(DataContext);

  const deleteTransaction = async (id) => {
    try {
      await request.delete(`/transactions/${id}`);
      const res = transactions.filter((i) => i.id !== id);
      setTransactions(res);
    } catch (err) {
      alert(err.message || "Failed to delete the trasaction!");
    }
  };

  return (
    <div className="transaction-list-container">
      <h2>Transactions</h2>
      {transactions.length > 0 ? (
        <div className="table-container">
          <table className="transaction-table">
            <thead>
              <tr>
                <th>No</th>
                <th>Date</th>
                <th>Description</th>
                <th>Amount</th>
                <th colSpan={2}>Action</th>
              </tr>
            </thead>

            <tbody>
              {transactions.map((i) => (
                <TransactionItem
                  key={i.id}
                  transaction={i}
                  deleteTransaction={deleteTransaction}
                />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No transactions available.</p>
      )}
    </div>
  );
};

export default TransactionList;
