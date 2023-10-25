import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";
import { useMemo } from "react";

export default function AdminAuthenticated({ children }) {
  const { authUser, authAdmin } = useAuth();

  return authUser?.isAdmin ? children : <Navigate to="/homepage" />;
}
