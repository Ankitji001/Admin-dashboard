import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { logout } = useAuth();

  return (
    <div className="navbar">
      <h3>Admin Dashboard</h3>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Navbar;
