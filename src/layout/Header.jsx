import { Link } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";

export default function Header() {
  const { authUser } = useAuth();

  return (
    <header className=" grid grid-cols-2 py-4 bg-orange-300 shadow-lg z-30">
      <div>
        <Link to="/homepage">Onmyway</Link>
      </div>
      <div className="flex justify-end gap-4 ">
        {authUser ? (
          <>
            <Link to="/cart">
              <span>Cart</span>
            </Link>
            <span>Dropdown</span>
          </>
        ) : (
          <>
            <Link to="/register">
              <span>Register</span>
            </Link>
            <Link to="/login">
              <span>Login</span>
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
