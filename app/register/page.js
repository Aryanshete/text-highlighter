"use client";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/navigation";

export default function Register() {
  const { register } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
  const success = register(email, password);

  if (success) {
    alert("Registered successfully!");
    router.push("/login");
  }
};


  return (
  <div style={containerStyle}>
    <div style={cardStyle}>
      <h2>Create Account</h2>

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

      <button style={buttonStyle} onClick={handleRegister}>
        Register
      </button>

      <p style={{ marginTop: "15px" }}>
        Already have an account?{" "}
        <a style={linkStyle} href="/login">
          Login
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

