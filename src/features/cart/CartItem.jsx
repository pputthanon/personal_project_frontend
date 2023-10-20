import CartContent from "./CartContent";
import CartImage from "./CartImage";
import CartQuantity from "./CartQuantity";
import CartSummary from "./CartSummary";

export default function CartItem({ bookObj, setAllBook }) {
  return (
    <div className="flex bg-white p-4 text-font border shadow">
      <div className="grid grid-cols-5 w-full  ml-20 mr-20">
        <CartImage image={bookObj.products.image} bookObj={bookObj} />
        {/* </div> */}
        {/* <div className=""> */}
        <CartQuantity bookObj={bookObj} />
        <CartContent bookObj={bookObj} setAllBook={setAllBook} />
        <CartSummary bookObj={bookObj} />
      </div>
    </div>
  );
}
