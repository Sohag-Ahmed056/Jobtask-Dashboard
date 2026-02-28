import { Outlet } from "react-router";

function App() {
  return (
    // This wrapper ensures your app always fills the screen
    // The Outlet will swap between Login.tsx and Dashboard.tsx
    <div className="min-h-screen bg-[#F8FAFB] font-sans antialiased text-gray-900">
      <Outlet />
    </div>
  );
}

export default App;