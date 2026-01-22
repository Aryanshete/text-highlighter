"use client";
import PrivateRoute from "../../../components/PrivateRoute";

export default function SuperAdminDashboard() {
  return (
    <PrivateRoute allowedRoles={["superadmin"]}>
      <h1>Super Admin Dashboard</h1>
    </PrivateRoute>
  );
}
