import { useAuth } from "../../hooks/use-auth";

export default function RedirectIfAuthenticate({ children }) {
  const { authUser } = useAuth();

  console.log(authUser);
  if (authUser) {
    return <Navigate to="/" />;
  }

  return children;
}
