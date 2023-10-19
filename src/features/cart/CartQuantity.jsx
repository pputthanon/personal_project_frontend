import { useState } from "react";
import axios from "../../config/axios";
import { MinusIcon, PlusIcon } from "../../icons";

export default function CartQuantity({ bookObj }) {
  const addBookCart = async (id) => {
    console.log(id);
    setAmount((amount) => amount + 1);
    await axios.patch(`/cart/add/${id}`);
  };

  const removeBookCart = async (id) => {
    console.log(id);
    setAmount((amount) => amount - 1);
    await axios.patch(`/cart/remove/${id}`);
  };

  const [amount, setAmount] = useState(bookObj.amount);

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
