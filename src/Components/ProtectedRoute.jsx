import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

// This component will protect routes
export function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  // If the user is not authenticated, redirect to login page
  if (!isAuthenticated) {
    return <Navigate to="/sign-in" />;
  }

  // Otherwise, render the protected component
  return children;
}
