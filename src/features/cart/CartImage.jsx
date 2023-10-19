export default function CartImage({ image, bookObj }) {
  return (
    <div className="flex col-span-2 gap-6">
      {/* <div className="flex flex-col"> */}
      <div className="w-24">
        <img src={image} alt="bookpic" className="rounded-xl" />
      </div>
      <div className="flex flex-col">
        <div className="font-semibold text-6">{bookObj.products.name}</div>
        <div className="text-[12px] mt-1 mb-1">{bookObj.products.author}</div>
      </div>
    </div>
    // </div>
  );
}
