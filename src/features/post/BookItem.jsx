import axios from "../../config/axios";
import BookContent from "./BookContent";
import BookImage from "./BookImage";

export default function BookItem({ bookObj }) {
  const addBook = (id) => {
    axios.post("/cart", { productsId: id });
  };

  return (
    <div className="bg-white w-40 h-96 rounded-xl ">
      <BookImage image={bookObj.image} />
      <BookContent bookObj={bookObj} />
      <div className="flex justify-center ">
        <button
          className="border p-1.5 text-xs rounded-md bg-yellow-400"
          onClick={() => addBook(bookObj.id)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
