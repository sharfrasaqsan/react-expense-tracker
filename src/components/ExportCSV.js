import { useContext } from "react";
import DataContext from "../context/DataContext";
import "../styles/exportcsv.css";

const ExportCSV = () => {
  const { transactions } = useContext(DataContext);

  const handleExport = () => {
    // Define headers
    const headers = ["ID", "Description", "Amount"];
    const rows = transactions.map((t) => [t.id, t.text, t.amount]);

    // Combine headers + rows into CSV format
    const csvContent = [headers, ...rows]
      .map((row) =>
        row
          .map(String)
          .map((cell) => `"${cell}"`)
          .join(",")
      )
      .join("\n");

    // Create blob and download
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "transactions.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={handleExport} className="export-btn">
      Export CSV
    </button>
  );
};

export default ExportCSV;
