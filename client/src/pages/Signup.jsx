import AuthLayout from "../components/AuthLayout";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { signup } from "../api/auth";

export default function Signup() {
     const [form, setForm] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(form);
    navigate("/login");
  };
  return (
    <AuthLayout
      title="Create an account"
      subtitle="Start turning conversations into insights"
    >
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 rounded-lg bg-bg border border-white/10 focus:outline-none focus:border-primary"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-lg bg-bg border border-white/10 focus:outline-none focus:border-primary"
           onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded-lg bg-bg border border-white/10 focus:outline-none focus:border-primary"
          onChange={(e) => setForm({ ...form, password: e.target.value })}

        />

        <button
          className="w-full bg-primary hover:bg-primary/90 py-3 rounded-lg font-semibold transition"
        >
          Sign Up
        </button>

        <p className="text-center text-sm text-muted">
          Already have an account?{" "}
          <Link to="/login" className="text-primary hover:underline">
            Login
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}
