import { createContext, useContext, useState, useEffect } from "react";

// Create AuthContext
const AuthContext = createContext();

// Custom hook to access the auth context
export function useAuth() {
  return useContext(AuthContext);
}

// Provider component to wrap your app
export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check for token in localStorage on initial load
    const token = localStorage.getItem("access_token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = () => {
    // After login, update the state and store the token in localStorage
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Call a logout API or clear auth token, then set auth state
    localStorage.removeItem("access_token");
    setIsAuthenticated(false);
  };

  return <AuthContext.Provider value={{ isAuthenticated, login, logout }}>{children}</AuthContext.Provider>;
}
