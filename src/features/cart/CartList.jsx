import CartItem from "./CartItem";

export default function CartList({ allBook }) {
  console.log(allBook);
  return (
    <div className="flex justify-center">
      <div className="w-1/2 ">
        {allBook.map((el) => (
          <CartItem key={el.id} bookObj={el} />
        ))}
      </div>
    </div>
  );
}
