export default function Order({ orderObj }) {
  return (
    <div className="flex justify-center text-font bg-white p-5">
      <div className="gap-6 p-5">
        <div className="">ID : {orderObj.id}</div>
        <div className=""> Date : {orderObj.orderedAt}</div>
        <div className="">Total Price : {orderObj.totalPrice} Baht</div>
        <div className=""> Status : {orderObj.status}</div>
      </div>
    </div>
  );
}
