import { useEffect, useState } from "react";
import OrderList from "../features/order/OrderList";
import Order from "../features/order/Order";
import { useAuth } from "../hooks/use-auth";
import axios from "../config/axios";

export default function OrdersPage() {
  const [allOrder, setAllOrder] = useState([]);
  const { authUser } = useAuth();

  useEffect(() => {
    axios
      .get(`/order/${authUser.id}`)
      .then((res) => {
        setAllOrder(res.data.getOrder);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(allOrder);
  return (
    <div>
      <div className="">
        <OrderList allOrder={allOrder} setAllOrder={setAllOrder} />
        {/* <Order /> */}
      </div>
    </div>
  );
}
