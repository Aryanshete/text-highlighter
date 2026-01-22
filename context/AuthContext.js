"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  if (storedUser) 
    {setUser(storedUser);
    }
}, []);

  const register = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.find((u) => u.email === email);

    if (userExists) {
      alert("User already exists. Please login.");
      return false;
    }

    users.push({ email, password, role: "user" });
    localStorage.setItem("users", JSON.stringify(users));
    
    return true;
  };

const login = (email, password) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const found = users.find(
    (u) => u.email === email && u.password === password
  );

  if (found) {
    localStorage.setItem("user", JSON.stringify(found));
    setUser(found);   
    return true;
  }

  return false;
};


  const logout = () => {
    localStorage.removeItem("authUser");
    setUser(null);
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
