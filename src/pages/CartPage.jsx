import { useEffect, useState } from "react";
import CartList from "../features/cart/CartList";
import axios from "../config/axios";
import { useAuth } from "../hooks/use-auth";

export default function CartPage() {
  const [allBook, setAllBook] = useState([]);
  const { authUser } = useAuth();
  // console.log(authUser);

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
    <div>
      <CartList allBook={allBook} />
    </div>
  );
}
