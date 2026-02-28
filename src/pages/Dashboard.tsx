import AnalyticsChart from "../components/dashboard/AnalyticsChart";
import ProductList from "../components/dashboard/Products";
import StatCard from "../components/dashboard/StatCard";
import UserTable from "../components/dashboard/UserTable";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { useGetDashboardDataQuery } from "../redux/features/dashboard";

const Dashboard = () => {
  // Fetch data using the feature-based RTK Query hook
  const { data, isLoading } = useGetDashboardDataQuery(undefined);
  console.log("Dashboard data:", data);

  if (isLoading) return <div className="p-10 text-emerald-600 font-bold animate-pulse">Loading...</div>;

  return (
    <div className="flex bg-[#F8FAFB] min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8">
        <Topbar />

        <header className="mb-8 flex justify-between items-end">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2 tracking-tight">Dashboard</h1>
            <p className="text-gray-400 font-medium">Manage and monitor your team progress.</p>
          </div>
          <div className="flex gap-3">
            <button className="bg-[#0D3B2E] text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-md">+ Add Project</button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard title="Total Users" value={data?.overview.totalUsers} growth={23} isDark />
          <StatCard title="Active Users" value={data?.overview.activeUsers} growth={12} />
          <StatCard title="Revenue" value={`$${data?.overview.revenue.toLocaleString()}`} growth={8} />
          <StatCard title="Growth" value={`${data?.overview.growth}%`} growth={5} />
        </div>

        {/* Data Visualization & User List */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         <div className="lg:col-span-2">
    {/* Use a fallback empty array if analytics is missing */}
    <AnalyticsChart data={data?.analytics || []} />

  </div>
          <div>
            <UserTable users={data?.users} />
          </div>
          <div className="lg:col-span-1">
            <ProductList products={data?.products || []} />
          </div>
        </div>
      </main>
    </div>
  );
};


export default (Dashboard);