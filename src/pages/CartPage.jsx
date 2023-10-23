import { useEffect, useState } from "react";
import CartList from "../features/cart/CartList";
import axios from "../config/axios";
import { useAuth } from "../hooks/use-auth";
import CartHeader from "../features/cart/CartHeader";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/use-cart";

export default function CartPage() {
  const [allBook, setAllBook] = useState([]);

  const { authUser } = useAuth();
  const { checkUpdateCart, setCheckUpdateCart } = useCart();
  // console.log(authUser);
  console.log(allBook);

  // for fetch book
  useEffect(() => {
    axios
      .get(`/cart/${authUser.id}`)
      .then((res) => {
        setAllBook(res.data.getBook);
      })
      .catch((err) => console.log(err));
  }, []);

  // for checkUpdateCart
  useEffect(() => {
    // fetch updated data
    if (checkUpdateCart) {
      axios
        .get(`/cart/${authUser.id}`)
        .then((res) => {
          setAllBook(res.data.getBook);
        })
        .catch((err) => console.log(err));
      setCheckUpdateCart(false); // set state to false
    }
  }, [checkUpdateCart]); // when state changed trigger useEffect

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
