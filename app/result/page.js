"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Result() {
  const searchParams = useSearchParams();
  const text = searchParams.get("text") || "No result found";

  const [copied, setCopied] = useState(false);

  const copyText = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Highlighted Result</h1>

      <div style={styles.box}>
        <pre style={styles.text}>{text}</pre>

        <button onClick={copyText} style={styles.button}>
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    background: "#f5f5f5",
  },
  title: {
    marginBottom: 20,
  },
  box: {
    background: "#fff",
    padding: 20,
    borderRadius: 8,
    maxWidth: 600,
    width: "100%",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  text: {
    whiteSpace: "pre-wrap",
    fontSize: 14,
  },
  button: {
    marginTop: 15,
    padding: "8px 12px",
    cursor: "pointer",
  },
};
