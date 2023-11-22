import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";

export default function AdminHeader() {
  const { logout, authUser } = useAuth();
  const navigate = useNavigate();
  return (
    <header className=" grid grid-cols-2 py-2 border-b z-30 sticky top-0 bg-white text-header">
      <div className="flex justify-normal items-center ml-4">
        <Link to="/admin">Onmyway</Link>
      </div>
      <div className="flex justify-end gap-4 items-center mr-4">
        {authUser?.isAdmin === true ? (
          <>
            <Link to="/admin/create">
              <span>Create</span>
            </Link>
            <Link to="/admin/orders">
              <span>Orders</span>
            </Link>
            <span
              className="cursor-pointer"
              onClick={() => {
                logout();
                navigate("/login");
              }}
            >
              Logout
            </span>
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
