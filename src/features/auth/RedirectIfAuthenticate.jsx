import { useAuth } from "../../hooks/use-auth";
import { Navigate } from "react-router-dom";

export default function RedirectIfAuthenticate({ children }) {
  const { authUser } = useAuth();

  console.log(authUser);
  if (authUser) {
    return <Navigate to="/homepage" />;
  }

  // if (!authUser) {
  //   return <Navigate to="/login" />;
  // }
  return children;
}
