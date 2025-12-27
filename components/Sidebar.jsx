import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Admin</h2>
      <Link to="/">Dashboard</Link>
      <Link to="/users">Users</Link>
    </div>
  );
};

export default Sidebar;
