import { MdSmsFailed } from "react-icons/md";

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
  // console.log(allBook);

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
      {allBook.length !== 0 ? (
        <CartHeader />
      ) : (
        <div className="flex flex-col justify-center items-center mt-64 ">
          <div className="text-[5rem] text-red-700">
            <MdSmsFailed />
          </div>
          <div className="text-xl font-semibold mt-2">
            It seems like you haven't added any books yet.
          </div>
          <Link to="/homepage">
            <button className="border bg-amber-500 py-2 px-8 rounded-xl font-semibold mt-10">
              Back to Homepage
            </button>
          </Link>
        </div>
      )}

      <div>
        <CartList allBook={allBook} setAllBook={setAllBook} />
      </div>

      <div className="flex justify-center mt-10">
        {allBook.length !== 0 ? (
          <div className="w-2/3 flex justify-end">
            <Link to="/checkout">
              <button className="border bg-amber-500 py-2 px-10 rounded-xl font-semibold">
                Check out
              </button>
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
}
