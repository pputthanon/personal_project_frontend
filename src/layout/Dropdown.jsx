import User from "../components/User";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";
import { useEffect, useRef, useState } from "react";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownEl = useRef(null); // syntax of React : {current : null}
  const { logout } = useAuth();

  useEffect(() => {
    const handleClickOutside = (e) => {
      //  ใช้ method .contain (DOM method) == มีอยู่
      // e.target == <div relative>
      if (!dropdownEl.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    // binding onClick โดยตรงไม่ได้ เลยต้องทำ pattern นี้ - binding to document directly (include head,body)
    // ไม่ว่าจะคลิ้กตรงไหนก็ออก
    document.addEventListener("click", handleClickOutside);
    // useEffect => CB FN()

    // ต้องรีมูฟออกด้วย เวลาล็อกเอ้าแล้วล็อกอินเข้ามาใหม่จะได้ไม่เบิ้ล
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownEl}>
      <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <User />
      </div>

      {isOpen && (
        <div className="w-36 absolute bg-white right-0 translate-y-1 border rounded-xl shadow-xl p-3">
          <Link to={`/account/overview`}>
            <div
              className="text-sm rounded-sm hover:bg-[#f8e4e4ce] mb-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              My Account
            </div>
          </Link>
          {/* <Link to={`/account/address`}>
            <div className="text-sm  rounded-sm hover:bg-[#f8e4e4ce]">
              Address
            </div>
          </Link> */}
          <Link to={`/order-history`}>
            <div
              className="text-sm  rounded-sm hover:bg-[#f8e4e4ce] mb-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              Orders
            </div>
          </Link>
          <Link to={`/payment-inform`}>
            <div
              className="text-sm  rounded-sm hover:bg-[#f8e4e4ce] mb-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              Payment Inform
            </div>
          </Link>

          <div
            className="text-sm rounded-sm hover:bg-[#f8e4e4ce] gap-2"
            onClick={logout}
          >
            Log out
          </div>
        </div>
      )}
    </div>
  );
}
