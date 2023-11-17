import { FaCartShopping } from "react-icons/fa6";
import { toast } from "react-toastify";
import axios from "../../config/axios";
import BookContent from "./BookContent";
import BookImage from "./BookImage";

export default function BookItem({ bookObj }) {
  const addBook = async (id) => {
    await axios.post("/cart", { productsId: id });
    toast.success("Add to cart!");
  };

  return (
    <div className="bg-white w-[180px] h-[320px] rounded-xl flex flex-col justify-between mb-4 shadow-lg">
      <BookImage image={bookObj.image} />
      <BookContent bookObj={bookObj} />
      <div className="flex justify-center pb-4">
        <button
          className="border p-1.5 text-xs rounded-md bg-amber-500 flex gap-2 items-center font-semibold w-3/5 justify-center"
          onClick={() => addBook(bookObj.id)}
        >
          Add to cart
          <FaCartShopping />
        </button>
      </div>
    </div>
  );
}
