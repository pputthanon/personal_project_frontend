import CartItem from "./CartItem";

export default function CartList({ allBook }) {
  console.log(allBook);
  return (
    <div>
      <div className="">
        {allBook.map((el) => (
          <CartItem key={el.id} bookObj={el} />
        ))}
      </div>
    </div>
  );
}
