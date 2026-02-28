// components/ProtectedRoute.tsx
import { Navigate } from "react-router";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../redux/features/authslice";



const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;