"use client";
import PrivateRoute from "../../../components/PrivateRoute";

export default function Users() {
  return (
    <PrivateRoute allowedRoles={["admin"]}>
      <h1>Admin Users List</h1>
    </PrivateRoute>
  );
}
