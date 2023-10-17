export default function BookContent({ bookObj }) {
  return (
    <div className="text-font mt-2 p-2">
      <div className="font-semibold text-[12px]">{bookObj.name}</div>
      <div className="text-[12px] mt-1 mb-1">{bookObj.author}</div>
      <div>{bookObj.price} Baht</div>
    </div>
  );
}
