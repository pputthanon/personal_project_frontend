import OrderItem from "./OrderItem";

export default function OrderSumList({ allBook, setAllBook }) {
  return (
    <div className="">
      <div>
        <div className="flex bg-white p-4 text-font ">
          <div className="grid grid-cols-5 w-full ml-20 mr-20">
            <div className="flex col-span-2 gap-6 justify-center items-center text-xl font-semibold">
              Product List
            </div>
            <div className="flex col-span-1 gap-6 justify-center items-center text-xl font-semibold">
              Quantity
            </div>
            <div className="flex col-span-1 gap-6 justify-center items-center text-xl font-semibold">
              Unit Price
            </div>
            <div className="flex col-span-1 gap-6 justify-center items-center text-xl font-semibold">
              Price Summary
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div className=" ">
        {allBook.map((el) => (
          <OrderItem key={el.id} bookObj={el} setAllBook={setAllBook} />
        ))}
      </div>
    </div>
  );
}
