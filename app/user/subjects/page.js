"use client";
import PrivateRoute from "../../../components/PrivateRoute";
import { ui } from "../_styles";
import { useRouter } from "next/navigation";
import { useAuth } from "../../../context/AuthContext";
export default function UserSubjects() {
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
              style={ui.button}
              onClick={() => router.push("/user/subjects")}
            >
              Subjects
            </button>

            <button
              style={{ ...ui.button, ...ui.buttonSecondary }}
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
      
        <h1>Subjects</h1>

        <div style={ui.card}>
          <ul style={ui.list}>
            {["IOT", "Computer Science", "Statistics", "Human Computer Interaction", "Artificial Intelligence"].map(
              (sub) => (
                <li key={sub} style={ui.listItem}>
                  {sub}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </PrivateRoute>
  );
}
