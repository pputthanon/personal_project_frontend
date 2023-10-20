import axios from "../../config/axios";

export default function CartContent({ bookObj, setAllBook }) {
  const deleteBookFromCart = async (id) => {
    await axios.delete(`/cart/${id}`);
    setAllBook((prev) => {
      return prev.filter((book) => book.id !== id);
    });
  };

  return (
    <div className="flex items-center justify-center gap-4">
      <div>{bookObj.products.price} Baht</div>
      <div>
        <button
          className="text-xs text-red-600"
          onClick={() => deleteBookFromCart(bookObj.id)}
        >
          delete
        </button>
      </div>
    </div>
  );
}
