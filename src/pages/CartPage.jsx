import { useEffect, useState } from "react";
import CartList from "../features/cart/CartList";
import axios from "../config/axios";
import { useAuth } from "../hooks/use-auth";
import CartHeader from "../features/cart/CartHeader";

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
        <div className="w-1/2 flex justify-end">
          <button className="border bg-orange-300 py-2 px-10 rounded-xl">
            Check out
          </button>
        </div>
      </div>
    </div>
  );
}
