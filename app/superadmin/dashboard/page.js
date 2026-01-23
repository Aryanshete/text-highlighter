"use client";
import PrivateRoute from "../../../components/PrivateRoute";
import { useRouter } from "next/navigation";
import { useAuth } from "../../../context/AuthContext";
import { superUI } from "../_styles";
import { useEffect, useState } from "react";

export default function SuperAdminDashboard() {
  const router = useRouter();
  const { logout } = useAuth();

  const [totalUsers, setTotalUsers] = useState(0);
  const [admins, setAdmins] = useState(0);
  const [superAdmins, setSuperAdmins] = useState(0);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    setTotalUsers(users.length);
    setAdmins(users.filter(u => u.role === "admin").length);
    setSuperAdmins(users.filter(u => u.role === "superadmin").length);
  }, []);

  return (
    <PrivateRoute allowedRoles={["superadmin"]}>
      <div style={superUI.page}>
        <div style={superUI.header}>
          <div style={superUI.nav}>
            <button style={superUI.button}>Dashboard</button>

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

        {/* STATS */}
        <div style={superUI.card}>
          <h2>Super Admin Dashboard</h2>

          <div style={superUI.statsGrid}>
            <div style={superUI.statBox}>
              <h3>Total Users</h3>
              <p>{totalUsers}</p>
            </div>

            <div style={superUI.statBox}>
              <h3>Admins</h3>
              <p>{admins}</p>
            </div>

            <div style={superUI.statBox}>
              <h3>Super Admins</h3>
              <p>{superAdmins}</p>
            </div>
          </div>
        </div>
      </div>
    </PrivateRoute>
  );
}
