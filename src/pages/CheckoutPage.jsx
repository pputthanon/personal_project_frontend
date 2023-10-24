import { useEffect, useState } from "react";
import { useAuth } from "../hooks/use-auth";
import { Link } from "react-router-dom";
import axios from "../config/axios";
import CartList from "../features/cart/CartList";
import OrderSumList from "../features/order/OrderSumList";
import PaymentPage from "./PaymentPage";

export default function CheckoutPage() {
  const [allBook, setAllBook] = useState([]);
  const { authUser } = useAuth();
  const [file, setFile] = useState(null);
  // const [input, setInput] = useState({
  //   transferSlip: "",
  //   userId: authUser.id,
  //   totalPrice: "",
  // });

  // console.log(authUser);
  // console.log(allBook);

  useEffect(() => {
    axios
      .get(`/cart/${authUser.id}`)
      .then((res) => {
        setAllBook(res.data.getBook);
      })
      .catch((err) => console.log(err));
  }, []);

  // console.log(allBook);

  const totalPrice = allBook.reduce((acc, item) => {
    const sum = item.amount * item.products.price;
    return acc + sum;
  }, 0);
  console.log(file, "setfile");
  const sendDataToBackend = async () => {
    // const totalPrice = allBook.reduce((acc, item) => {
    //   const sum = item.amount * item.products.price;
    //   return acc + sum;
    // }, 0);

    // const data = new FormData();
    try {
      const formData = new FormData();
      formData.append("transferSlip", file);
      // console.log(formData, "file");
      formData.append("totalPrice", totalPrice);
      // console.log(formData, "fdata");
      formData.append("userId", authUser.id);
      await axios.post("/order", formData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="flex justify-center text-font">
        <div className="w-2/3 ">
          <div className="bg-white flex justify-center text-2xl mt-10 border rounded-t-xl py-2">
            Order Summary
          </div>
          {/* <div className="py-2 flex justify-between bg-white"> */}
          {/* <CartList allBook={allBook} setAllBook={setAllBook} /> */}
          <OrderSumList allBook={allBook} setAllBook={setAllBook} />
          {/* </div> */}

          <div className="bg-blue-200 border rounded-b-xl ">
            <div className="py-2 flex justify-between font-semibold">
              <div className="ml-10 ">Total Price </div>
              <div className="mr-10">{totalPrice}</div>
            </div>
          </div>
        </div>
      </div>

      <PaymentPage setFile={setFile} />

      <div className="flex justify-center mt-10">
        <div className="w-2/3 flex justify-end ">
          {/* <Link to="/account/payment-inform"> */}
          <button
            className="border p-2 bg-purple-300 rounded-xl"
            onClick={sendDataToBackend}
          >
            Confirm Order
          </button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
}
