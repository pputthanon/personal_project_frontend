import { useAuth } from "../../hooks/use-auth";
import { Navigate } from "react-router-dom";

export default function RedirectIfAuthenticate({ children }) {
  const { authUser } = useAuth();

  if (authUser) {
    return <Navigate to="/homepage" />;
  }

  return children;
}
