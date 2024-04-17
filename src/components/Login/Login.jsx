import React, { useState } from "react";
import "./Login.css";
import { assets } from "../../assets/assets";

export default function Login({ setShowLogin, onLogin }) {
  const [currState, setCurrState] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Incercand sa se conecteze...");
    console.log("Email:", email);
    console.log("Password:", password);
    const storedUser = JSON.parse(localStorage.getItem("user"));
    console.log("Stored User:", storedUser);
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      console.log("Logat cu succes!");
      onLogin(storedUser.name);
      setShowLogin(false);
      alert("Autentificare reușită!");
    } else {
      console.log("Invalid email or password");
      setError("Invalid email or password");
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log("Incercand sa se inregistreze...");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    const newUser = { name, email, password };
    console.log("New User:", newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
    onLogin(name);
    setShowLogin(false);
    alert("Cont creat cu succes!");
  };

  return (
    <div className="login">
      <form className="login-container">
        <div className="login-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        {error && <p className="error-message">{error}</p>}
        <div className="login-inputs">
          {currState === "Sign Up" && (
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button onClick={currState === "Sign Up" ? handleSignUp : handleLogin}>
          {currState === "Sign Up" ? "Create account" : "Login"}
        </button>
        <div className="login-condition">
          <input type="checkbox" required />
          <p>By continuing, you agree to our Terms of Use and Privacy Policy.</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
}
