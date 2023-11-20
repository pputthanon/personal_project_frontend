import { FaCartShopping } from "react-icons/fa6";
import { useAuth } from "../../hooks/use-auth";
import { toast } from "react-toastify";
import { ImBin2 } from "react-icons/im";
import { FaPenToSquare } from "react-icons/fa6";

import axios from "../../config/axios";
import BookContent from "./BookContent";
import BookImage from "./BookImage";
import { useEffect, useState } from "react";

export default function BookItem({ bookObj, update, setUpdate }) {
  const { authUser } = useAuth();

  const addBook = async (id) => {
    await axios.post("/cart", { productsId: id });
    toast.success("Add to cart!");
  };

  const deleteBook = async () => {
    const res = await axios.patch(`/admin/delete/${bookObj.id}`);
    setUpdate(!update);
    toast.success("Deleted Product!");
  };

  return (
    <div className="bg-white w-[180px] h-[320px] rounded-xl flex flex-col justify-between mb-4 shadow-lg">
      <BookImage image={bookObj.image} />
      <BookContent bookObj={bookObj} />
      <div className="flex justify-center pb-4">
        {authUser.isAdmin === false ? (
          <button
            className="border p-1.5 text-xs rounded-md bg-amber-500 flex gap-2 items-center font-semibold w-3/5 justify-center"
            onClick={() => addBook(bookObj.id)}
          >
            Add to cart
            <FaCartShopping />
          </button>
        ) : (
          <div className=" flex items-center gap-4">
            <div className="text-[1rem] text-purple-950">
              <button>
                <FaPenToSquare />
              </button>
            </div>
            <div className="text-[1rem] text-purple-950">
              <button onClick={() => deleteBook(bookObj.id)}>
                <ImBin2 />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
