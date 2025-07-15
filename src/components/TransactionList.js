import { useContext } from "react";
import DataContext from "../context/DataContext";
import TransactionItem from "./TransactionItem";
import Search from "./Search";
import request from "../api/request";
import "../styles/transactionlist.css";

const TransactionList = () => {
  const { transactions, setTransactions, searchedTransactions, searchQuery } =
    useContext(DataContext);

  const deleteTransaction = async (id) => {
    try {
      await request.delete(`/transactions/${id}`);
      const res = transactions.filter((i) => i.id !== id);
      setTransactions(res);
    } catch (err) {
      alert(err.message || "Failed to delete the trasaction!");
    }
  };

  if (transactions.length === 0)
    return <p className="info-msg">No transaction found</p>;

  return (
    <div className="transaction-list-container">
      <h2>Transaction History</h2>
      <Search />

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
            {searchedTransactions.map((i) => (
              // before seachQuery, it was transactions.map() now it filters transactions based on searchQuery
              <TransactionItem
                key={i.id}
                transaction={i}
                deleteTransaction={deleteTransaction}
              />
            ))}
          </tbody>
        </table>

        {transactions.length > 0 && searchedTransactions.length === 0 && (
          <p className="info-msg">
            No results found for{" "}
            <span className="highlight">{searchQuery}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default TransactionList;
