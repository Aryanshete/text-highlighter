"use client";

import PrivateRoute from "../../../components/PrivateRoute";
import { useAuth } from "../../../context/AuthContext";
import { superUI } from "../_styles";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Reports() {
  const { logout } = useAuth();
  const router = useRouter();

  const [users, setUsers] = useState([]);
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const storedLogs = JSON.parse(localStorage.getItem("userLogs")) || [];

    setUsers(storedUsers);
    setLogs(storedLogs);
  }, []);

  const totalUsers = users.length;
  const roleCount = users.reduce((acc, user) => {
    acc[user.role] = (acc[user.role] || 0) + 1;
    return acc;
  }, {});

  const totalLogins = logs.length;
  const lastLogin =
    logs.length > 0 ? logs[logs.length - 1].time : "N/A"; //latest login time
  const mostActiveRole =
    logs.length === 0
      ? "N/A"
      : Object.entries(
          logs.reduce((acc, log) => {
            acc[log.role] = (acc[log.role] || 0) + 1;
            return acc;
          }, {})
        ).sort((a, b) => b[1] - a[1])[0][0];

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

            <button
              style={superUI.buttonSecondary}
              onClick={() => router.push("/superadmin/user-logs")}
            >
              User Logs
            </button>

            <button style={{ ...superUI.button, ...superUI.active }}>
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

        {/* REPORT */}
        <div style={superUI.grid}>
          <div style={superUI.statBox}>
            <h3>Total Users</h3>
            <p>{totalUsers}</p>
          </div>

          <div style={superUI.statBox}>
            <h3>Total Logins</h3>
            <p>{totalLogins}</p>
          </div>

          <div style={superUI.statBox}>
            <h3>Most Active Role</h3>
            <p>{mostActiveRole}</p>
          </div>

          <div style={superUI.statBox}>
            <h3>Last Login</h3>
            <p>{lastLogin}</p>
          </div>
        </div>

        {/* ROLE  TABLE */}
        <div style={superUI.card}>
          <h2>User Role Distribution</h2>

          <table style={superUI.table}>
            <thead>
                <tr>
                <th style={superUI.th}>Role</th>
                <th style={{ ...superUI.th, ...superUI.thCenter }}>
                    Count
                </th>
                </tr>
            </thead>

            <tbody>
                {Object.entries(roleCount).map(([role, count]) => (
                <tr key={role}>
                    <td style={superUI.td}>{role}</td>
                    <td style={{ ...superUI.td, ...superUI.tdCenter }}>
                    {count}
                    </td>
                </tr>
                ))}
            </tbody>
          </table>

        </div>
      </div>
    </PrivateRoute>
  );
}
