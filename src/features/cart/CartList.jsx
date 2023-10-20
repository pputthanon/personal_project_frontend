import CartItem from "./CartItem";

export default function CartList({ allBook, setAllBook }) {
  // console.log(allBook);
  return (
    <div className="flex justify-center">
      <div className="w-2/3 ">
        {allBook.map((el) => (
          <CartItem key={el.id} bookObj={el} setAllBook={setAllBook} />
        ))}
      </div>
    </div>
  );
}
