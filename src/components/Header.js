import { Link } from "react-router-dom";
import "../styles/header.css";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { user } = useAuth();

  return (
    <header className="header">
      <>
        <Link to="/" className="logo-link" style={{ outline: "none" }}>
          <h1 className="logo">Expense Tracker</h1>
        </Link>

        <nav className="nav">
          <input
            type="checkbox"
            id="menu-toggle"
            className="menu-toggle"
            aria-label="Toggle navigation"
          />
          <label htmlFor="menu-toggle" className="hamburger">
            &#9776;
          </label>

          <ul className="nav-links">
            <li>
              <Link to="/">Dashboard</Link>
            </li>

            <li>
              <Link to="/add">Add Transaction</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>

            {!user && (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}

            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>
      </>
    </header>
  );
};

export default Header;
