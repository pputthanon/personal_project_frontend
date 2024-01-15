import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";

export default function AdminAuthenticated({ children }) {
  const { authUser } = useAuth();

  return authUser?.isAdmin ? children : <Navigate to="/homepage" />;
}
