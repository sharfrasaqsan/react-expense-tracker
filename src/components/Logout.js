import { useContext } from "react";
import DataContext from "../context/DataContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import "../styles/logout.css";

const Logout = () => {
  const { navigate } = useContext(DataContext);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logout successful!");
      navigate("/login");
    } catch (err) {
      alert(err.message || "Failed to logout!");
    }
  };

  return (
    <button onClick={handleLogout} className="logout-btn">
      Logout
    </button>
  );
};

export default Logout;
