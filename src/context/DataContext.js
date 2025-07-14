// src/context/DataContext.js
import { createContext, useEffect, useState } from "react";
import request from "../api/request";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [transactionText, setTransactionText] = useState("");
  const [transactionAmount, setTransactionAmount] = useState("");

  useEffect(() => {
    const fetchTransaction = async () => {
      try {
        const res = await request.get("/transactions");
        if (!res.data || res.data.length === 0) {
          alert("No data to fetch!");
          return;
        }
        setTransactions(res.data);
      } catch (err) {
        alert(err.message || "Failed to fetch data!");
      }
    };

    fetchTransaction();
  }, []);

  return (
    <DataContext.Provider
      value={{
        transactions,
        setTransactions,
        transactionText,
        setTransactionText,
        transactionAmount,
        setTransactionAmount,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
