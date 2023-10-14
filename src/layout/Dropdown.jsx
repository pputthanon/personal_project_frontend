import User from "../components/User";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";
import { useRef, useState } from "react";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownEl = useRef(null);
  const { authUser } = useAuth();

  return (
    <div className="relative" ref={dropdownEl}>
      <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <User />
      </div>

      {isOpen && (
        <div className="w-36 absolute bg-white right-0 translate-y-1 border rounded-xl shadow-xl p-2">
          <Link to={`/account/overview`}>
            <div className="text-sm  hover:bg-orange-100">My Account</div>
          </Link>
          <Link to={`/account/address`}>
            <div className="text-sm  hover:bg-orange-100">Address</div>
          </Link>
          <Link to={`/order-history`}>
            <div className="text-sm  hover:bg-orange-100">Orders</div>
          </Link>
          <Link to={`/payment-inform`}>
            <div className="text-sm  hover:bg-orange-100">Payment Inform</div>
          </Link>
          <div className="text-sm  hover:bg-orange-100">Log out</div>
        </div>
      )}
    </div>
  );
}
