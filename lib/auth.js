// lib/auth.js
"use server";

import { redirect } from "next/navigation";

function isValid(value) {
  return !value || value.trim() === "";
}

export async function handleLogin(state, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  // Simulated hardcoded credentials for testing
  const superAdminCredentials = {
    email: "admin@ar-store.com",
    password: "admin123",
  };
  const businessOwnerCredentials = {
    email: "owner@ar-store.com",
    password: "owner123",
  };

  // Basic validation
  if (isValid(email) || isValid(password)) {
    return { message: "Invalid input" };
  }

  // Role-based login logic
  if (email === superAdminCredentials.email && password === superAdminCredentials.password) {
    // Redirect after successful login for super admin
    redirect("/dashboard?role=super_admin");
  } else if (email === businessOwnerCredentials.email && password === businessOwnerCredentials.password) {
    // Redirect after successful login for business owner
    redirect("/dashboard?role=business_owner");
  } else {
    // Handle failed login
    return { message: "Invalid email or password." };
  }
}
