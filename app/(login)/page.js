// app/(login)/page.js
import LeftSide from "@/components/LeftSide";
import LoginForm from "@/components/LoginForm";
import { handleLogin } from "@/lib/auth";

export default function LoginPage() {
  return (
    <div className="flex h-screen">
      {/* Left Side (Promotional Image and Text) */}
      <LeftSide />

      {/* Right Side (Login Form) */}
      <div className="w-1/2 flex items-center justify-center">
        <LoginForm action={handleLogin} />
      </div>
    </div>
  );
}
