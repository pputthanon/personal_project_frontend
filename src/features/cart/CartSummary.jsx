export default function CartSummary({ bookObj }) {
  return (
    <div className="flex items-center justify-center gap-4">
      {Number(bookObj.products.price) * Number(bookObj.amount)}
    </div>
  );
}
