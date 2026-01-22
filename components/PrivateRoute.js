"use client";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function PrivateRoute({ children, allowedRoles }) {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");   
    } else if (!allowedRoles.includes(user.role)) {
      router.push("/unauthorized"); 
    }
  }, [user]);

  if (!user || !allowedRoles.includes(user.role)) return null;

  return children;
}
