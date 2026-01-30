import AuthLayout from "../components/AuthLayout";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { login } from "../api/auth";
import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password });
      loginUser(res.data.token);
      navigate("/dashboard");
    } catch (err) {
      alert("Login failed");
    }
  };
  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to continue to Verba_AI"
    >
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-lg bg-bg border border-white/10 focus:outline-none focus:border-primary"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded-lg bg-bg border border-white/10 focus:outline-none focus:border-primary"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="w-full bg-primary hover:bg-primary/90 py-3 rounded-lg font-semibold transition"
        >
          Sign In
        </button>

        <p className="text-center text-sm text-muted">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-primary hover:underline">
            Sign up
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}
