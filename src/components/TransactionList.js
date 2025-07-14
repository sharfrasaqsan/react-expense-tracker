import { useContext } from "react";
import DataContext from "../context/DataContext";
import TransactionItem from "./TransactionItem";

const TransactionList = () => {
  const { transactions } = useContext(DataContext);

  return (
    <div>
      <h2>Transactions</h2>
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
            <TransactionItem key={i.id} transaction={i} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;
