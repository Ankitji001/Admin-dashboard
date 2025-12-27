import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import UserChart from "../components/UserChart";

const Dashboard = () => {
  return (
    <div className="layout">
      <Sidebar />

      <div className="content">
        <Navbar />

        <div className="cards">
          <StatCard title="Users" value="1200" />
          <StatCard title="Revenue" value="$45K" />
          <StatCard title="Orders" value="320" />
        </div>

        <div className="chart-box">
          <UserChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
