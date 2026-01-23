"use client";
import PrivateRoute from "../../../components/PrivateRoute";
import { adminUI } from "../_styles";
import { useRouter } from "next/navigation";
import { useAuth } from "../../../context/AuthContext";
import { useEffect, useState } from "react";

export default function AdminStudents() {
  const router = useRouter();
  const { logout } = useAuth();
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const predefinedStudents = [
      { id: 1, name: "Aryan Shete", email: "aryan@student.com" },
      { id: 2, name: "Samruddhi Bhagwat", email: "samruddhi@student.com" },
      { id: 3, name: "Om Ghante", email: "om@student.com" },
      { id: 4, name: "Siddhant Karnawat", email: "siddhant@student.com" },
      { id: 5, name: "Shreyash Mali", email: "shreyash@student.com" },
    ];

    setStudents(predefinedStudents);
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

            <button style={adminUI.button}>
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

       {/* students */}
        <div style={adminUI.card}>
          <h2>Students List</h2>

          <table style={adminUI.table}>
            <thead>
              <tr>
                <th style={adminUI.th}>Name</th>
                <th style={adminUI.th}>Email</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s) => (
                <tr key={s.id}>
                  <td style={adminUI.td}>{s.name}</td>
                  <td style={adminUI.td}>{s.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PrivateRoute>
  );
}
