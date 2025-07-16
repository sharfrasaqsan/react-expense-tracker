import { createContext, useEffect, useState } from "react";
import request from "../api/request";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [transactionText, setTransactionText] = useState("");
  const [transactionAmount, setTransactionAmount] = useState("");
  const [transactionType, setTransactionType] = useState("income");
  const [editTransactionType, setEditTransactionType] = useState(null);
  const [editTransactionText, setEditTransactionText] = useState("");
  const [editTransactionAmount, setEditTransactionAmount] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedTransactions, setSearchedTransactions] = useState([]);
  const [filters, setFilters] = useState("all");
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // Fetch transactions
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

  // Edit transaction
  const editTransaction = async (id) => {
    try {
      const res = await request.put(`/transactions/${id}`, {
        id,
        datetime: format(new Date(), "yyyy-MM-dd HH:mm:ss"),
        text: editTransactionText,
        amount: Math.abs(Number(editTransactionAmount)),
        type: editTransactionType,
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
      setEditTransactionType("income");
      navigate("/");
    } catch (err) {
      alert(err.message || "Failed to edit the transaction!");
    }
  };

  // Search transactions
  useEffect(() => {
    const searched = transactions.filter((i) =>
      i.text.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (searchQuery === "") {
      setSearchedTransactions(transactions);
      return;
    }

    setSearchedTransactions(searched);
  }, [searchQuery, transactions]);

  // Filter transactions

  useEffect(() => {
    const filterTransactions = () => {
      if (filters === "all") {
        setFilteredTransactions(searchedTransactions);
      }

      if (filters === "income") {
        setFilteredTransactions(
          searchedTransactions.filter((i) => i.type === "income")
        );
      }

      if (filters === "expense") {
        setFilteredTransactions(
          searchedTransactions.filter((i) => i.type === "expense")
        );
      }
    };

    filterTransactions();
  }, [filters, searchedTransactions]);

  return (
    <DataContext.Provider
      value={{
        transactions,
        setTransactions,
        transactionText,
        setTransactionText,
        transactionAmount,
        setTransactionAmount,
        transactionType,
        setTransactionType,
        editTransactionType,
        setEditTransactionType,
        editTransactionText,
        setEditTransactionText,
        editTransactionAmount,
        setEditTransactionAmount,
        editTransaction,
        navigate,
        searchQuery,
        setSearchQuery,
        searchedTransactions,
        setSearchedTransactions,
        setFilters,
        filteredTransactions,
        filters,
        email,
        setEmail,
        password,
        setPassword,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
