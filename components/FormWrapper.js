// components/FormWrapper.js
"use client";
import { useFormState } from "react-dom";
export default function FormWrapper({ action, children }) {
  const [state, formAction] = useFormState(action, {});
  console.log("formAction", formAction);

  return (
    <form action={formAction} method="POST" className="space-y-4">
      {children} {/* This is where form fields are passed in */}
    </form>
  );
}
