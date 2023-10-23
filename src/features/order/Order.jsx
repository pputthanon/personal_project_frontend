export default function Order({ orderObj }) {
  return (
    <div className="flex justify-center text-font ">
      <div className=" bg-white">
        <div className="p-6">
          <div className="flex gap-6">ID : {orderObj.id}</div>
          <div className="flex gap-6"> Date : {orderObj.orderedAt}</div>
          <div className="flex gap-6">
            {" "}
            Total Price : {orderObj.totalPrice} Baht
          </div>
          <div className="flex gap-6"> Status : {orderObj.status}</div>
        </div>
      </div>
    </div>
  );
}
