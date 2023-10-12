import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className=" grid grid-cols-2 py-4 bg-orange-300 shadow-lg top-0 z-30 w-screen ">
      <div>
        <Link to="/">Onmyway</Link>
      </div>
      <div className="flex justify-end gap-4 ">
        <Link to="/cart">
          <span>Cart</span>
        </Link>
        <Link to="/login">
          <span>Login</span>
        </Link>
        <Link to="/register">
          <span>Register</span>
        </Link>
        <span>Dropdown</span>
      </div>
    </header>
  );
}
