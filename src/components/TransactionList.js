import { useContext } from "react";
import DataContext from "../context/DataContext";
import TransactionItem from "./TransactionItem";
import Search from "./Search";
import "../styles/transactionlist.css";
import Filter from "./Filter";
import ExportCSV from "./ExportCSV";
import Logout from "./Logout";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebase";

const TransactionList = () => {
  const {
    transactions,
    setTransactions,
    searchQuery,
    filteredTransactions,
    loading,
  } = useContext(DataContext);

  // delete transaction
  // const deleteTransaction = async (id) => {
  //   try {
  //     await request.delete(`/transactions/${id}`);
  //     const res = transactions.filter((i) => i.id !== id);
  //     setTransactions(res);
  //   } catch (err) {
  //     alert(err.message || "Failed to delete the trasaction!");
  //   }
  // };

  const deleteTransaction = async (id) => {
    try {
      await deleteDoc(doc(db, "transactions", id));
      const res = transactions.filter((i) => i.id !== id);
      setTransactions(res);
    } catch (err) {
      alert(err.message || "Failed to delete the trasaction!");
    }
  };

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
            {loading && (
              <tr>
                <td
                  colSpan="6"
                  style={{ textAlign: "center", padding: "1rem" }}
                >
                  Loading transactions...
                </td>
              </tr>
            )}

            {!loading && filteredTransactions.length === 0 && (
              <tr>
                <td
                  colSpan="6"
                  style={{ textAlign: "center", padding: "1rem" }}
                >
                  No results found for{" "}
                  <span className="highlight">
                    {searchQuery || "current filter"}
                  </span>
                </td>
              </tr>
            )}

            {!loading &&
              filteredTransactions.length > 0 &&
              filteredTransactions.map((i) => (
                <TransactionItem
                  key={i.id}
                  transaction={i}
                  deleteTransaction={deleteTransaction}
                />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionList;
