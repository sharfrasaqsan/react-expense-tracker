import { useContext } from "react";
import DataContext from "../context/DataContext";
import TransactionItem from "./TransactionItem";
import request from "../api/request";

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
    <div>
      <h2>Transactions</h2>
      {transactions.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
              <th rowSpan={2}>Action</th>
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
      ) : (
        <p>No transactions available.</p>
      )}
    </div>
  );
};

export default TransactionList;
