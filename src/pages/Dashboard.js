import Balance from "../components/Balance";
import TransactionList from "../components/TransactionList";
import "../styles/dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-right">
        <Balance />
      </div>
      <div className="dashboard-left">
        <TransactionList />
      </div>
    </div>
  );
};

export default Dashboard;
