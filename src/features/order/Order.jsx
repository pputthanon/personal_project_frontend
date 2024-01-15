export default function Order({ orderObj }) {
  return (
    <div className=" text-font p-6 rounded-md bg-white mb-5 ">
      <div className="">Reference Number : {orderObj.id}</div>
      <div className=""> Date : {orderObj.orderedAt}</div>
      <div className="">Total Price : {orderObj.totalPrice} Baht</div>
      <div className=""> Status : {orderObj.status}</div>
    </div>
  );
}
