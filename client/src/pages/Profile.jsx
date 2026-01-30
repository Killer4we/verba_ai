import Navbar from "../components/Navbar";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user } = useAuth();

  return (
    <>
      <Navbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold">Profile</h1>
        <p className="text-muted mt-2">{user.email}</p>
      </div>
    </>
  );
}
