"use client";
import PrivateRoute from "../../../components/PrivateRoute";
import { superUI } from "../_styles";
import { useRouter } from "next/navigation";
import { useAuth } from "../../../context/AuthContext";
import { useEffect, useState } from "react";

export default function UserLogs() {
  const router = useRouter();
  const { logout } = useAuth();
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const storedLogs = JSON.parse(localStorage.getItem("userLogs")) || [];
    setLogs(storedLogs.reverse()); // latest first
  }, []);

  return (
    <PrivateRoute allowedRoles={["superadmin"]}>
      <div style={superUI.page}>
        <div style={superUI.header}>
          <div style={superUI.nav}>
            <button
              style={superUI.buttonSecondary}
              onClick={() => router.push("/superadmin/dashboard")}
            >
              Dashboard
            </button>

            <button
              style={superUI.buttonSecondary}
              onClick={() => router.push("/superadmin/user-management")}
            >
              User Management
            </button>

            <button style={superUI.button}>
              User Logs
            </button>

            <button
              style={superUI.buttonSecondary}
              onClick={() => router.push("/superadmin/reports")}
            >
              Reports
            </button>
          </div>

          <button
            onClick={logout}
            style={{ ...superUI.button, background: "#ef4444" }}
          >
            Logout
          </button>
        </div>

        <div style={superUI.card}>
          <h2>User Login Logs</h2>

          {logs.length === 0 ? (
            <p>No logs found.</p>
          ) : (
            <table style={superUI.table}>
                <thead>
                    <tr>
                    <th style={{ ...superUI.th, textAlign: "left" }}>Email</th>
                    <th style={{ ...superUI.th, textAlign: "center" }}>Role</th>
                    <th style={{ ...superUI.th, textAlign: "right" }}>Time</th>
                    </tr>
                </thead>

                <tbody>
                    {logs.map((log, idx) => (
                    <tr key={idx}>
                        <td style={{ ...superUI.td, textAlign: "left" }}>
                        {log.email}
                        </td>
                        <td style={{ ...superUI.td, textAlign: "center" }}>
                        {log.role}
                        </td>
                        <td style={{ ...superUI.td, textAlign: "right" }}>
                        {log.time}
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>

          )}
        </div>
      </div>
    </PrivateRoute>
  );
}
