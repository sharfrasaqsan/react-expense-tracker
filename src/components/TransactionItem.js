import { useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "../context/DataContext";

const TransactionItem = ({ transaction, deleteTransaction }) => {
  const { transactions } = useContext(DataContext);

  const rowNo = transactions.findIndex((i) => i.id === transaction.id);

  return (
    <tr>
      {transaction ? (
        <>
          <td>{rowNo + 1}</td>
          <td>{transaction.datetime}</td>
          <td>{transaction.text}</td>
          <td>{transaction.amount}</td>
          <td>
            <Link to={`/edit/${transaction.id}`}>
              <button>Edit</button>
            </Link>
          </td>
          <td>
            <button onClick={() => deleteTransaction(transaction.id)}>
              Delete
            </button>
          </td>
        </>
      ) : (
        <p>No Transaction data here.</p>
      )}
    </tr>
  );
};

export default TransactionItem;
