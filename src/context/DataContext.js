import { createContext, useEffect, useState } from "react";
import request from "../api/request";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [transactionText, setTransactionText] = useState("");
  const [transactionAmount, setTransactionAmount] = useState("");
  const [editTransactionText, setEditTransactionText] = useState("");
  const [editTransactionAmount, setEditTransactionAmount] = useState("");

  const navigate = useNavigate();

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

  const editTransaction = async (id) => {
    try {
      const res = await request.put(`/transactions/${id}`, {
        id,
        datetime: format(new Date(), "yyyy-MM-dd HH:mm:ss"),
        text: editTransactionText,
        amount: Number(editTransactionAmount),
      });

      if (!res.data || res.data.length === 0) {
        return;
      }

      const updatedTransaction = transactions.map((i) =>
        i.id === id ? { ...res.data } : i
      );
      setTransactions(updatedTransaction);
      setEditTransactionText("");
      setEditTransactionAmount("");
      navigate("/");
    } catch (err) {
      alert(err.message || "Failed to edit the transaction!");
    }
  };

  return (
    <DataContext.Provider
      value={{
        transactions,
        setTransactions,
        transactionText,
        setTransactionText,
        transactionAmount,
        setTransactionAmount,
        editTransactionText,
        setEditTransactionText,
        editTransactionAmount,
        setEditTransactionAmount,
        editTransaction,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
