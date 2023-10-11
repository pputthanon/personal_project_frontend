import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="absolute grid grid-cols-2 py-4 bg-orange-300 shadow-lg top-0 z-30 w-screen ">
      <div>
        <Link to="/">Onmyway</Link>
      </div>
      <div className="flex justify-end gap-4 ">
        <span>Cart</span>
        <span>Login</span>
        <span>Register</span>
        <span>Dropdown</span>
      </div>
    </header>
  );
}
