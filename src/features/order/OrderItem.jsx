import CartImage from "../cart/CartImage";

export default function OrderItem({ bookObj }) {
  return (
    <div className="flex bg-white p-4 text-font ">
      <div className="grid grid-cols-5 w-full ml-20 mr-20">
        <CartImage image={bookObj.products.image} bookObj={bookObj} />
        <div className="flex justify-center items-center">{bookObj.amount}</div>
        <div className="flex justify-center items-center">
          {bookObj.products.price}
        </div>
        <div className="flex justify-center items-center">
          {Number(bookObj.products.price) * Number(bookObj.amount)}
        </div>
      </div>
    </div>
  );
}
