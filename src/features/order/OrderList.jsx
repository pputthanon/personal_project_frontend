import React from "react";
import Order from "./Order";
import { Link, useLocation } from "react-router-dom";
export default function OrderList({ allOrder, setAllOrder }) {
  const { pathname } = useLocation();
  return (
    <div className="flex justify-center mt-10">
      <div className="w-2/3 bg-white rounded-lg">
        {allOrder?.map((el) => (
          <Link
            key={el.id}
            onClick={() => addPath(pathname)}
            to={`/order/orderItems/${el.id}`}
          >
            <Order key={el.id} orderObj={el} setAllOrder={setAllOrder} />
          </Link>
        ))}
      </div>
    </div>
  );
}
