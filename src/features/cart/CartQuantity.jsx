import { useState } from "react";
import axios from "../../config/axios";
import { MinusIcon, PlusIcon } from "../../icons";
import { useCart } from "../../hooks/use-cart";

export default function CartQuantity({ bookObj }) {
  const addBookCart = async (id) => {
    setAmount((amount) => amount + 1);
    await axios.patch(`/cart/add/${id}`);
    setCheckUpdateCart(true); // when cart updated set state to true
  };

  const removeBookCart = async (id) => {
    setAmount((amount) => amount - 1);
    await axios.patch(`/cart/remove/${id}`);
    setCheckUpdateCart(true); // when cart updated set state to true
  };

  const [amount, setAmount] = useState(bookObj.amount);
  const { setCheckUpdateCart } = useCart();

  return (
    <div className="flex justify-center items-center gap-6">
      <button onClick={() => removeBookCart(bookObj.id)}>
        <MinusIcon />
      </button>
      <div className="text-2xl">{amount}</div>
      <button className="" onClick={() => addBookCart(bookObj.id)}>
        <PlusIcon />
      </button>
    </div>
  );
}
