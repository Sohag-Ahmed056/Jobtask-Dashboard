import { Outlet } from "react-router";

function App() {
  return (
 
    <div className="min-h-screen bg-[#F8FAFB] font-sans antialiased text-gray-900">
      <Outlet />
    </div>
  );
}

export default App;