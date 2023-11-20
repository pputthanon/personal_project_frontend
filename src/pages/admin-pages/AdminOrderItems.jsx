import { useParams } from "react-router-dom";
import OrderSumList from "../../features/order/OrderSumList";
import { useEffect, useState } from "react";
import { MdEdit } from "react-icons/md";

import axios from "../../config/axios";

export default function AdminOrderItems() {
  const [allBook, setAllBook] = useState([]);
  const [data, setData] = useState([]);
  const { orderId } = useParams();
  useEffect(() => {
    axios
      .get(`/order/${orderId}`)
      .then((res) => {
        setAllBook(res.data.getOrderItems);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`/admin/orders/${orderId}`)
      .then((res) => {
        setData(res.data.getOrderByOrderId);
      })
      .catch((err) => console.log(err));
  }, []);

  const totalPrice = allBook.reduce((acc, item) => {
    const sum = item.amount * item.products.price;
    return acc + sum;
  }, 0);

  console.log(allBook);
  console.log(data);

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
        <div className="mt-5">
          <div className="bg-white rounded-t-md p-5">
            <div className="font-semibold">Transfer slip</div>
            <div className="w-2/3"> {data.transferSlip}</div>
          </div>
          <div className="flex justify-between  items-center bg-blue-200 rounded-b-md p-5">
            <div className="font-semibold">Status: {data.status}</div>
            <div className="flex gap-2">
              <div>Edit</div>
              <div className="text-[1.5rem]">
                <MdEdit />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
