import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="grid grid-cols-2 py-4 bg-orange-300 shadow-lg sticky top-0 z-30  ">
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
