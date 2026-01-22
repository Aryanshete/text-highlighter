"use client";
import PrivateRoute from "../../../components/PrivateRoute";

export default function UserDashboard() {
  return (
    <PrivateRoute allowedRoles={["user"]}>
      <h1>User Dashboard</h1>
    </PrivateRoute>
  );
}
