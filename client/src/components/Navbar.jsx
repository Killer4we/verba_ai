import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { logoutUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow">
      <Link to="/dashboard" className="font-bold text-xl">
        Home
      </Link>

      <Link to="/about" className="text-gray-600">
        About
      </Link>

      <div className="flex gap-4 items-center">
        <Link to="/profile">Profile</Link>
        <button
          onClick={handleLogout}
          className="text-red-500"
        >
          Sign Out
        </button>
      </div>
    </nav>
  );
}
