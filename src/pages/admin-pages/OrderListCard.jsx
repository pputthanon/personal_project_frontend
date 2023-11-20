export default function OrderListCard({ orderObj }) {
  console.log(orderObj);
  return (
    <div className="rounded-md h-36 flex flex-col justify-between shadow-lg bg-white m-4">
      <div className="">
        <div>
          {orderObj.user.firstName} {orderObj.user.lastName}
        </div>
        <div> {orderObj.user.address}</div>
        <div> {orderObj.user.mobile}</div>
        <div>{orderObj.status}</div>
      </div>
    </div>
  );
}
