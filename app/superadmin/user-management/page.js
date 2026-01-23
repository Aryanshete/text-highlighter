"use client";
import PrivateRoute from "../../../components/PrivateRoute";
import { superUI } from "../_styles";
import { useRouter } from "next/navigation";
import { useAuth } from "../../../context/AuthContext";
import { useEffect, useState } from "react";

export default function UserManagement() {
  const router = useRouter();
  const { logout } = useAuth();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  const updateRole = (email, newRole) => {
    const updatedUsers = users.map((u) =>
      u.email === email ? { ...u, role: newRole } : u
    );

    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

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

            <button style={superUI.button}>
              User Management
            </button>

            <button
              style={superUI.buttonSecondary}
              onClick={() => router.push("/superadmin/user-logs")}
            >
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

        {/* USERS TABLE */}
        <div style={superUI.card}>
          <h2>User Management</h2>

          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ textAlign: "left", padding: "10px" }}>Email</th>
                <th style={{ textAlign: "left", padding: "10px" }}>Role</th>
                <th style={{ textAlign: "left", padding: "10px" }}>Change Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u, idx) => (
                <tr key={idx}>
                  <td style={{ padding: "10px" }}>{u.email}</td>
                  <td style={{ padding: "10px" }}>{u.role}</td>
                  <td style={{ padding: "10px" }}>
                    <select
                      value={u.role}
                      onChange={(e) => updateRole(u.email, e.target.value)}
                    >
                      <option value="user">User</option>
                      <option value="admin">Admin</option>
                      <option value="superadmin">Super Admin</option>
                    </select>
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
