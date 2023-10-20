import { useEffect, useState } from "react";
import CartList from "../features/cart/CartList";
import axios from "../config/axios";
import { useAuth } from "../hooks/use-auth";
import CartHeader from "../features/cart/CartHeader";
import { Link } from "react-router-dom";

export default function CartPage() {
  const [allBook, setAllBook] = useState([]);

  const { authUser } = useAuth();
  // console.log(authUser);
  console.log(allBook);

  useEffect(() => {
    // console.log("run this");
    axios
      .get(`/cart/${authUser.id}`)
      .then((res) => {
        setAllBook(res.data.getBook);
        // const total = res.data.getBook.reduce((acc, item) => {
        //   let subtotal = {};
        //   subtotal["productsId"] = item.productsId;
        //   subtotal["sum"] = item.amount * item.products.price;
        //   console.log(subtotal);
        //   console.log(acc);
        //   return [...acc, subtotal];
        // }, []);
        // console.log(total);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="">
      <CartHeader />
      <div>
        <CartList allBook={allBook} setAllBook={setAllBook} />
      </div>
      <div className="flex justify-center mt-10">
        <div className="w-2/3 flex justify-end">
          <Link to="/checkout">
            <button className="border bg-orange-300 py-2 px-10 rounded-xl">
              Check out
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
