import { useContext } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import DataContext from "../context/DataContext";

const COLORS = ["#3b82f6", "#ef4444"]; // savings: blue, expense: red

const ChartSummary = () => {
  const { transactions } = useContext(DataContext);

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const savings = income - expense;

  const data = [
    { name: "Savings", value: savings > 0 ? savings : 0 },
    { name: "Expense", value: expense },
  ];

  return (
    <div style={{ width: "100%", maxWidth: "500px", margin: "2rem auto" }}>
      <h3 style={{ textAlign: "center", marginBottom: "1rem" }}>
        Total Income Breakdown
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartSummary;
