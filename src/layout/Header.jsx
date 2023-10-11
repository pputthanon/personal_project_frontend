import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="grid grid-cols-2 px-4 bg-orange-700 shadow-lg sticky top-0 z-30 ">
      <div>
        <Link to="/" />
        Onmyway HEeeeeeeeelllooooo
      </div>
    </header>
  );
}
