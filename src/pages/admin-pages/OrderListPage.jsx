import { useEffect, useState } from "react";
import OrderListContainer from "./OrderListContainer";
import axios from "../../config/axios";

export default function OrderListPage() {
  const [allOrder, setAllOrder] = useState([]);

  useEffect(() => {
    axios
      .get("/admin/orders")
      .then((res) => {
        setAllOrder(res.data.getAllOrders);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex justify-center">
      <OrderListContainer allOrder={allOrder} setAllOrder={setAllOrder} />
    </div>
  );
}
