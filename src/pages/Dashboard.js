import { useContext, useEffect } from "react";
import Balance from "../components/Balance";
import TransactionList from "../components/TransactionList";
import "../styles/dashboard.css";
import DataContext from "../context/DataContext";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { setFilters, setSearchQuery } = useContext(DataContext);
  const { user } = useAuth();

  useEffect(() => {
    setFilters("all");
    setSearchQuery("");
  }, [setFilters, setSearchQuery]);

  return (
    <div>
      <p>
        Welcome <span style={{ fontWeight: "bold" }}>{user.displayName}</span>
      </p>
      <div className="dashboard">
        <div className="dashboard-right">
          <Balance />
        </div>
        <div className="dashboard-left">
          <TransactionList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
