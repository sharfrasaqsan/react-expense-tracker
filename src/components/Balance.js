import { useContext } from "react";
import DataContext from "../context/DataContext";
import "../styles/balance.css";
import ChatSummary from "./ChatSummary";

const Balance = () => {
  const { transactions } = useContext(DataContext);

  const income = transactions
    .filter((i) => i.type === "income")
    .reduce((acc, value) => acc + value.amount, 0);

  const expenses = transactions
    .filter((i) => i.type === "expense")
    .reduce((acc, value) => acc + value.amount, 0);

  const balance = income - expenses;

  return (
    <div className="balance-card">
      <h2 className="balance-title">Balance Summary</h2>
      <div className="balance-items">
        <div className="balance-item total">
          <span>Total Balance</span>
          <span>${balance.toFixed(2)}</span>
        </div>
        <div className="balance-item income">
          <span>Total Income</span>
          <span>+${income.toFixed(2)}</span>
        </div>
        <div className="balance-item expenses">
          <span>Total Expenses</span>
          <span>-${expenses.toFixed(2)}</span>
        </div>
      </div>
      <ChatSummary />
    </div>
  );
};

export default Balance;
