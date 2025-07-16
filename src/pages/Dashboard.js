import { useContext, useEffect } from "react";
import Balance from "../components/Balance";
import TransactionList from "../components/TransactionList";
import "../styles/dashboard.css";
import DataContext from "../context/DataContext";

const Dashboard = () => {
  const { setFilters, setSearchQuery } = useContext(DataContext);

  useEffect(() => {
    setFilters("all");
    setSearchQuery("");
  }, [setFilters, setSearchQuery]);

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
