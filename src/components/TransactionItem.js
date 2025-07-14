import { Link } from "react-router-dom";

const TransactionItem = ({ transaction, deleteTransaction }) => {
  return (
    <>
      <tr>
        <td>{transaction.id}</td>
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
      </tr>
    </>
  );
};

export default TransactionItem;
