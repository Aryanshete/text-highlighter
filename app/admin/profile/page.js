"use client";
import PrivateRoute from "../../../components/PrivateRoute";
import { adminUI } from "../_styles";
import { useRouter } from "next/navigation";
import { useAuth } from "../../../context/AuthContext";
import { useEffect, useState } from "react";

export default function AdminProfile() {
  const router = useRouter();
  const { user, logout } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    if (user) {
      setEmail(user.email);
      setRole(user.role);
      setName(user.name || "Admin User");
    }
  }, [user]);

  const handleSave = () => {
    alert("Profile updated successfully");
  };

  return (
    <PrivateRoute allowedRoles={["admin"]}>
      <div style={adminUI.page}>
        <div style={adminUI.header}>
          <div style={adminUI.nav}>
            <button
              style={{ ...adminUI.button, ...adminUI.buttonSecondary }}
              onClick={() => router.push("/admin/users")}
            >
              Users
            </button>

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

            <button style={adminUI.button}>
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
        {/* profile */}
        <div style={adminUI.card}>
          <h2>Admin Profile</h2>

          <div style={adminUI.formGroup}>
            <label>Name  </label>
            <input
              style={adminUI.input}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div style={adminUI.formGroup}>
            <label>Email  </label>
            <input style={adminUI.input} value={email} disabled />
          </div>

          <div style={adminUI.formGroup}>
            <label>Role  </label>
            <input style={adminUI.input} value={role} disabled />
          </div>

          <button
            style={{ ...adminUI.button, marginTop: "10px" }}
            onClick={handleSave}
          >
            Save Changes
          </button>
        </div>
      </div>
    </PrivateRoute>
  );
}
