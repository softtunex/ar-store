"use server";

import { redirect } from "next/navigation";

function isValid(value) {
  return !value || value.trim() === "";
}

export async function handleLogin(state, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  // Simulate user verification (replace with real DB/user check)
  const superAdminCredentials = {
    email: "admin@ar-store.com",
    password: "admin123",
  };
  const businessOwnerCredentials = {
    email: "owner@ar-store.com",
    password: "owner123",
  };

  // Basic validation to ensure email and password are provided
  if (isValid(email) || isValid(password)) {
    return { message: "Invalid input" };
  }

  // Check for valid credentials
  if (
    email === superAdminCredentials.email &&
    password === superAdminCredentials.password
  ) {
    // Super Admin recognized
    redirect("/admin-dashboard");
  } else if (
    email === businessOwnerCredentials.email &&
    password === businessOwnerCredentials.password
  ) {
    // Business Owner recognized
    redirect("/dashboard");
  } else {
    // Invalid credentials
    return { message: "Invalid email or password." };
  }
}
