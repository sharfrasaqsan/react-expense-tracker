const TransactionItem = ({ transaction }) => {
  return (
    <tr>
      <td>{transaction.id}</td>
      <td>{transaction.datetime}</td>
      <td>{transaction.text}</td>
      <td>{transaction.amount}</td>
      <td>
        <button>Edit</button>
      </td>
      <td>
        <button>Delete</button>
      </td>
    </tr>
  );
};

export default TransactionItem;
