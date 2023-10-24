import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";

export default function Autheticated({ children }) {
  const { authUser } = useAuth(); // null

  if (!authUser) {
    return <Navigate to="/login" />;
  }
  return children;
}
