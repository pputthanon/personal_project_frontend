import { Link } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";
import Dropdown from "./Dropdown";

export default function Header() {
  const { authUser } = useAuth();

  return (
    <header className=" grid grid-cols-2 py-2 border-b z-30 sticky top-0 bg-white text-header">
      <div className="flex justify-normal items-center ml-4">
        <Link to="/homepage">Onmyway</Link>
      </div>
      <div className="flex justify-end gap-4 items-center mr-4">
        {authUser ? (
          <>
            <Link to="/cart">
              <span>Cart</span>
            </Link>
            <Dropdown />
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
