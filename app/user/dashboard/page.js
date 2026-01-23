"use client";
import PrivateRoute from "../../../components/PrivateRoute";
import ProtectedRoute from "../../../components/protectedRoute";
import { useAuth } from "../../../context/AuthContext";
import {ui} from "../_styles";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { logout } = useAuth();
  
  async function highlightText() {
    if (!text.trim()) {
      alert("Please enter some text");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      const data = await res.json();

      localStorage.setItem("highlightResult", JSON.stringify(data));
      router.push("/result");

    } catch (error) {
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    
  <PrivateRoute allowedRoles={["user"]}>
    <ProtectedRoute>
      <div style={ui.page}>
        
        <div style={ui.header}>
          <div style={ui.nav}>
            <button
              style={ui.button}
              onClick={() => router.push("/user/dashboard")}
            >
              Dashboard
            </button>

            <button
              style={{ ...ui.button, ...ui.buttonSecondary }}
              onClick={() => router.push("/user/subjects")}
            >
              Subjects
            </button>

            <button
              style={{ ...ui.button, ...ui.buttonSecondary }}
              onClick={() => router.push("/user/profile")}
            >
              Profile
            </button>
          </div>

          <button
            onClick={logout}
            style={{ ...ui.button, background: "#ef4444", border: "none" }}
          >
            Logout
          </button>
        </div>

        
        <div style={styles.container}>
          <h1 style={styles.title}>AI Text Highlighter</h1>

          <textarea
            style={styles.textarea}
            placeholder="Paste your paragraph here..."
            onChange={(e) => setText(e.target.value)}
          />

          <button
            style={{
              ...styles.button,
              backgroundColor: loading ? "#9ca3af" : "#2563eb",
              cursor: loading ? "not-allowed" : "pointer",
            }}
            onClick={highlightText}
            disabled={loading}
          >
            {loading ? "Processing..." : "Highlight Important Points"}
          </button>

          {loading && <p style={styles.loadingText}>⏳ Please wait...</p>}
        </div>
      </div> 
    </ProtectedRoute>
  </PrivateRoute>
);

  }
const styles = {
  container: {
    maxWidth: "600px",
    margin: "60px auto",
    padding: "20px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },

  title: {
    marginBottom: "20px",
  },

  textarea: {
    width: "100%",
    height: "180px",
    padding: "12px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    outline: "none",
    resize: "none",
  },

  button: {
    marginTop: "15px",
    padding: "10px 20px",
    fontSize: "16px",
    border: "none",
    borderRadius: "6px",
    color: "white",
  },

  loadingText: {
    marginTop: "10px",
    color: "#555",
    fontSize: "14px",
  },
};
