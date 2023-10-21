import { useEffect, useState } from "react";
import { useAuth } from "../hooks/use-auth";
import axios from "../config/axios";

export default function CheckoutPage() {
  const [allBook, setAllBook] = useState([]);

  const { authUser } = useAuth();

  // console.log(authUser);
  console.log(allBook);

  useEffect(() => {
    axios
      .get(`/cart/${authUser.id}`)
      .then((res) => {
        setAllBook(res.data.getBook);
      })
      .catch((err) => console.log(err));
  }, []);

  const totalPrice = allBook.reduce((acc, item) => {
    const sum = item.amount * item.products.price;
    return acc + sum;
  }, 0);

  return (
    <div>
      <div className="flex justify-center text-font">
        <div className="w-2/5 ">
          <div className="bg-white flex justify-center text-2xl mt-10 border rounded-t-xl py-2">
            Order Summary
          </div>

          <div className="py-2 flex justify-between bg-white">
            <div className="ml-10">Subtotal Price {totalPrice}</div>
            <div className="mr-10"> {totalPrice}</div>
          </div>

          <div className="bg-blue-200 border rounded-b-xl ">
            <div className="py-2 flex justify-between font-semibold">
              <div className="ml-10 ">Total Price {totalPrice}</div>
              <div className="mr-10">{totalPrice}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <div className="w-2/5 flex justify-end ">
          <button className="border p-2 bg-purple-300 rounded-xl">
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
}
