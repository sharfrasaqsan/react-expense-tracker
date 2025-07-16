import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, initializing } = useAuth();

  if (initializing)
    return (
      <div
        style={{ textAlign: "center", fontSize: "1.5rem", marginTop: "2rem" }}
      >
        Loading...
      </div>
    );

  return user ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
