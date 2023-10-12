import { Link } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const { authUser } = useAuth();
  const navigate = useNavigate();
  return (
    <header className=" grid grid-cols-2 py-4 bg-orange-300 shadow-lg top-0 z-30 w-screen ">
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
            </Link>{" "}
            <Link to="/login">
              <span>Login</span>
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
