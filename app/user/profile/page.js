"use client";
import PrivateRoute from "../../../components/PrivateRoute";
import { useAuth } from "../../../context/AuthContext";
import { ui } from "../_styles";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export default function UserProfile() {
  const { user } = useAuth();
  const router = useRouter();
  const { logout } = useAuth();
  return (
    <PrivateRoute allowedRoles={["user"]}>
        <div style={ui.page}>
        
        <div style={ui.header}>
          <div style={ui.nav}>
            <button
              style={{...ui.button, ...ui.buttonSecondary}}
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
              style={ui.button}
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
      
        <h1>My Profile</h1>

        <div style={ui.card}>
          {user && (
            <>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Role:</strong> {user.role}</p>
            </>
          )}
        </div>
      </div>
    </PrivateRoute>
  );
}
