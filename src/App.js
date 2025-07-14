// App.js
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import AddTransaction from "./pages/AddTransaction";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add" element={<AddTransaction />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
