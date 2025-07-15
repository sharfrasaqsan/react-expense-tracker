import { useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "../context/DataContext";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import "../styles/transactionlist.css";

const TransactionItem = ({ transaction, deleteTransaction }) => {
  const { transactions } = useContext(DataContext);

  const rowNo = transactions.findIndex((i) => i.id === transaction.id);

  if (transactions.length === 0) return <p>No transaction found</p>;

  return (
    <tr>
      <td>{rowNo + 1}</td>
      <td>{transaction.datetime}</td>
      <td>{transaction.text}</td>
      <td
        style={{
          color: transaction.type === "income" ? "green" : "red",
          textAlign: "right",
        }}
      >
        {transaction.type === "income" ? "+" : "-"}$
        {Math.abs(transaction.amount).toFixed(2)}
      </td>
      <td>
        <Link to={`/edit/${transaction.id}`}>
          <FaRegEdit
            role="button"
            title="Edit Transaction"
            className="edit-icon"
          />
        </Link>
      </td>
      <td>
        <RiDeleteBin6Line
          onClick={() => deleteTransaction(transaction.id)}
          className="delete-icon"
          role="button"
          title="Delete Transaction"
        />
      </td>
    </tr>
  );
};

export default TransactionItem;
