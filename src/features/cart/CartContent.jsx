export default function CartContent({ bookObj }) {
  return (
    <div>
      <div className="font-semibold text-[12px]">{bookObj.products.name}</div>
      <div className="text-[12px] mt-1 mb-1">{bookObj.products.author}</div>
      <div>{bookObj.products.price} Baht</div>
    </div>
  );
}
