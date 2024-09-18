// components/LoginForm.js
"use client";
import { handleLogin } from "@/lib/auth";
import FormWrapper from "./FormWrapper";
import { useFormState } from "react-dom";

export default function LoginForm() {
  const [state, formData] = useFormState(handleLogin, { message: null });

  return (
    <div className="max-w-md w-full">
      <h2 className="text-3xl font-bold mb-4">Login</h2>
      <p className="text-gray-600 mb-6">
        Enter your credentials to manage your store or access admin functions.
      </p>

      {/* FormWrapper will wrap the form fields */}
      <form action={formData} className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Insert your Email here"
            required
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Insert your Password here"
            required
          />
        </div>
        {state.message && <p style={{ color: "red" }}>{state.message}</p>}
        <button
          //   type="button"
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
}
