import { useContext } from "react";
import DataContext from "../context/DataContext";

const Balance = () => {
  const { transactions } = useContext(DataContext);

  const income = transactions
    .filter((i) => i.type === "income")
    .reduce((acc, value) => acc + value.amount, 0);

  const expenses = transactions
    .filter((i) => i.type === "expense")
    .reduce((acc, value) => acc + value.amount, 0);

  const balance = income + expenses;
  // Short method
  //   const totalExpenses = amounts
  //     .filter((i) => i < 0)
  //     .reduce((acc, value) => acc + value, 0);

  return (
    <div>
      <h3>Balance Summary</h3>
      <p>Total Balance = ${balance.toFixed(2)}</p>
      <p>Total Income = +${income.toFixed(2)}</p>
      <p>Total Expenses = -${expenses.toFixed(2)}</p>
    </div>
  );
};

export default Balance;
