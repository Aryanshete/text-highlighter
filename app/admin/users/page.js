"use client";
import PrivateRoute from "../../../components/PrivateRoute";
import { adminUI } from "../_styles";
import { useRouter } from "next/navigation";
import { useAuth } from "../../../context/AuthContext";
import { useEffect, useState } from "react";

export default function AdminUsers() {
  const router = useRouter();
  const { logout } = useAuth();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  return (
    <PrivateRoute allowedRoles={["admin"]}>
      <div style={adminUI.page}>
        <div style={adminUI.header}>
          <div style={adminUI.nav}>
            <button style={adminUI.button}>Users</button>

            <button
              style={{ ...adminUI.button, ...adminUI.buttonSecondary }}
              onClick={() => router.push("/admin/students")}
            >
              Students
            </button>

            <button
              style={{ ...adminUI.button, ...adminUI.buttonSecondary }}
              onClick={() => router.push("/admin/teachers")}
            >
              Teachers
            </button>

            <button
              style={{ ...adminUI.button, ...adminUI.buttonSecondary }}
              onClick={() => router.push("/admin/profile")}
            >
              Profile
            </button>
          </div>

          <button
            onClick={logout}
            style={{ ...adminUI.button, background: "#ef4444", border: "none" }}
          >
            Logout
          </button>
        </div>

        {/* users */}
        <div style={adminUI.card}>
          <h2>Registered Users</h2>

          <table style={adminUI.table}>
            <thead>
              <tr>
                <th style={adminUI.th}>Email</th>
                <th style={adminUI.th}>Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u, index) => (
                <tr key={index}>
                  <td style={adminUI.td}>{u.email}</td>
                  <td style={adminUI.td}>{u.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PrivateRoute>
  );
}
