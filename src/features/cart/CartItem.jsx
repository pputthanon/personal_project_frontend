import CartContent from "./CartContent";
import CartImage from "./CartImage";

export default function CartItem({ bookObj }) {
  return (
    <div>
      <CartImage image={bookObj.products.image} />
      <CartContent bookObj={bookObj} />
    </div>
  );
}
