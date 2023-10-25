import { useAuth } from "../../hooks/use-auth";
import { Navigate } from "react-router-dom";

export default function RedirectIfAuthenticate({ children }) {
  const { authUser, authAdmin } = useAuth();
  // console.log(authUser);

  // if (authAdmin) {
  //   return <Navigate to="/admin" />;
  // }

  if (authUser && !authUser?.isAdmin) {
    return <Navigate to="/homepage" />;
  }

  // if (!authUser?.isAdmin) {
  //   return <Navigate to="/homepage" />;
  // }
  // if (authUser?.isAdmin) {
  //   return <Navigate to="/admin" />;
  // }

  return children;
}
