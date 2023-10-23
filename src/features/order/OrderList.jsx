import React from "react";
import Order from "./Order";
export default function OrderList({ allOrder, setAllOrder }) {
  return (
    <div className="flex justify-center">
      <div className="w-2/3 bg-white">
        {allOrder.map((el) => (
          <Order key={el.id} orderObj={el} setAllOrder={setAllOrder} />
        ))}
      </div>
    </div>
  );
}
