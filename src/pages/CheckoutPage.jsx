import { useEffect, useState } from "react";
import { useAuth } from "../hooks/use-auth";
import axios from "../config/axios";
import { useCart } from "../hooks/use-cart";

export default function CheckoutPage() {
  const [allBook, setAllBook] = useState([]);

  const { authUser } = useAuth();
  const { checkUpdateCart, setCheckUpdateCart } = useCart();
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
      <div className="flex justify-center">
        <div className="w-2/3 ">
          <div className="bg-white flex justify-center text-2xl mt-10 border rounded-t-xl py-2">
            Check out
          </div>
          <div className="bg-blue-400 border rounded-b-xl">
            <div>
              <div>Total Price: {totalPrice}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <div className="w-2/3 flex justify-end ">
          <button className="border p-2 bg-purple-300 rounded-xl">
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
}
