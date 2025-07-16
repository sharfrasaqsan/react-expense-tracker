import { useContext } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase";
import DataContext from "../context/DataContext";
import "../styles/register.css";
import { Link } from "react-router-dom";

const Register = () => {
  const {
    userName,
    setUserName,
    email,
    setEmail,
    password,
    setPassword,
    navigate,
  } = useContext(DataContext);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!userName || !email || !password)
      return alert("Please fill in all fields!");

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Update displayName (username)
      const user = userCredential.user;
      await updateProfile(user, {
        displayName: userName,
      });

      alert("Registration successful!");
      setUserName("");
      setEmail("");
      setPassword("");
      navigate("/login");
    } catch (err) {
      alert(err.message || "Failed to register!");
    }
  };

  return (
    <form onSubmit={handleRegister} className="register-form">
      <h2>Register</h2>
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        placeholder="Username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        required
      />
      <label htmlFor="email">Email: </label>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label htmlFor="password">Password: </label>
      <input
        type="password"
        placeholder="Password (min 6 chars)"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <p className="password-requirements">
        * Password must be at least 6 characters
      </p>

      <button type="submit">Register</button>

      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </form>
  );
};

export default Register;
