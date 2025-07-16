import { useContext } from "react";
import DataContext from "../context/DataContext";
import TransactionItem from "./TransactionItem";
import Search from "./Search";
import request from "../api/request";
import "../styles/transactionlist.css";
import Filter from "./Filter";
import ExportCSV from "./ExportCSV";
import Logout from "./Logout";

const TransactionList = () => {
  const { transactions, setTransactions, searchQuery, filteredTransactions } =
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
      <div className="transaction-list-header">
        <h2>Transaction History</h2>
        <Logout />
      </div>
      <Search />
      <div className="controls">
        <Filter />
        <ExportCSV />
      </div>

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
            {filteredTransactions.map((i) => (
              // before filteredTransactions it was searchedTransactions now it filters the date based on filteredTransactions
              // before seachQuery, it was transactions.map() now it filters transactions based on searchQuery
              <TransactionItem
                key={i.id}
                transaction={i}
                deleteTransaction={deleteTransaction}
              />
            ))}
          </tbody>
        </table>

        {filteredTransactions.length === 0 && (
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
