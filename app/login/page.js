"use client";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const ok = login(email, password);
    if (!ok) alert("Invalid credentials");
  };

return (
  <div style={containerStyle}>
    <div style={cardStyle}>
      <h2>Login</h2>

      <input
        style={inputStyle}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        style={inputStyle}
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button style={buttonStyle} onClick={handleLogin}>
        Login
      </button>

      <p style={{ marginTop: "15px" }}>
        New user?{" "}
        <a style={linkStyle} href="/register">
          Register here
        </a>
      </p>
    </div>
  </div>
);

}
const containerStyle = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#f5f7fa",
};

const cardStyle = {
  background: "#ffffff",
  padding: "30px",
  borderRadius: "8px",
  width: "320px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
  textAlign: "center",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "10px 0",
  border: "1px solid #ddd",
  borderRadius: "6px",
  fontSize: "14px",
};

const buttonStyle = {
  width: "100%",
  padding: "10px",
  background: "#4f46e5",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "15px",
};

const linkStyle = {
  color: "#4f46e5",
  textDecoration: "none",
  fontSize: "14px",
};

