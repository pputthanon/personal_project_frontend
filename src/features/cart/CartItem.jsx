import CartContent from "./CartContent";
import CartImage from "./CartImage";
import CartQuantity from "./CartQuantity";

export default function CartItem({ bookObj }) {
  return (
    <div className="flex bg-white p-4 text-font border shadow">
      <div className="grid grid-cols-4 w-full  ml-20 mr-20">
        <CartImage image={bookObj.products.image} bookObj={bookObj} />
        {/* </div> */}
        {/* <div className=""> */}
        <CartQuantity bookObj={bookObj} />
        <CartContent bookObj={bookObj} />
      </div>
    </div>
  );
}
