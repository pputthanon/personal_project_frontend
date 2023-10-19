export default function CartContent({ bookObj }) {
  return (
    <div className="flex items-center justify-center gap-4">
      <div>{bookObj.products.price} Baht</div>
      <div>
        <button className="text-xs text-red-600">delete</button>
      </div>
    </div>
  );
}
