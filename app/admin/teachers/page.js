"use client";
import PrivateRoute from "../../../components/PrivateRoute";
import { adminUI } from "../_styles";
import { useRouter } from "next/navigation";
import { useAuth } from "../../../context/AuthContext";
import { useEffect, useState } from "react";

export default function AdminTeachers() {
  const router = useRouter();
  const { logout } = useAuth();
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const predefinedTeachers = [
      { id: 1, name: "Dr. Ajit Kadam", subject: "IOT", email: "ajit@teacher.com" },
      { id: 2, name: "Ms. Rasika Patil", subject: "Computer Science", email: "rasika@teacher.com" },
      { id: 3, name: "Mr. Bhushan Kumar", subject: "Statistics", email: "bhushan@teacher.com" },
      { id: 4, name: "Mrs. Bhagyashri Tingre", subject: "Human Computer Interaction", email: "bhagyashri@teacher.com" },
      { id: 5, name: "Dr. Vinayak Kottavar", subject: "Artificial Intelligence", email: "vinayak@teacher.com" },
    ];

    setTeachers(predefinedTeachers);
  }, []);

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

            <button style={adminUI.button}>
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

        {/* TEACHERS TABLE */}
        <div style={adminUI.card}>
          <h2>Teachers List</h2>

          <table style={adminUI.table}>
            <thead>
              <tr>
                <th style={adminUI.th}>Name</th>
                <th style={adminUI.th}>Subject</th>
                <th style={adminUI.th}>Email</th>
              </tr>
            </thead>
            <tbody>
              {teachers.map((t) => (
                <tr key={t.id}>
                  <td style={adminUI.td}>{t.name}</td>
                  <td style={adminUI.td}>{t.subject}</td>
                  <td style={adminUI.td}>{t.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PrivateRoute>
  );
}
