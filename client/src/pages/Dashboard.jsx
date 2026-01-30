import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="p-6">
        <h1 className="text-3xl font-semibold">
          Welcome to your Dashboard 🚀
        </h1>
      </div>
    </>
  );
}
