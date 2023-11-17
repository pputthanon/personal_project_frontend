import { useParams } from "react-router-dom";
import OrderSumList from "../features/order/OrderSumList";
import { useEffect, useState } from "react";
import axios from "../config/axios";

export default function OrderItemPage() {
  const [allBook, setAllBook] = useState([]);
  const { orderId } = useParams();
  useEffect(() => {
    axios
      .get(`/order/${orderId}`)
      .then((res) => {
        setAllBook(res.data.getOrderItems);
      })
      .catch((err) => console.log(err));
  }, []);

  const totalPrice = allBook.reduce((acc, item) => {
    const sum = item.amount * item.products.price;
    return acc + sum;
  }, 0);

  return (
    <div className="flex justify-center text-font">
      <div className="w-2/3 ">
        <div className="bg-white flex justify-center text-2xl mt-10 border rounded-t-xl py-2 font-bold">
          Order Summary
        </div>

        <OrderSumList allBook={allBook} setAllBook={setAllBook} />

        <div className="bg-blue-200 border rounded-b-xl ">
          <div className="py-2 flex justify-between font-semibold">
            <div className="ml-10 ">Total Price </div>
            <div className="mr-10">{totalPrice}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
