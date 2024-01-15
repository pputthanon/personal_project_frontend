export default function OrderListCard({ orderObj }) {
  console.log(orderObj);
  return (
    <div className="rounded-md h-40 flex flex-col justify-between shadow-lg bg-white m-5">
      <div className="m-5">
        <div>Reference Number : {orderObj.id}</div>
        <div>
          {orderObj.user.firstName} {orderObj.user.lastName}
        </div>
        <div> {orderObj.user.address}</div>
        <div> {orderObj.user.mobile}</div>
        <div className="font-semibold">{orderObj.status}</div>
      </div>
    </div>
  );
}
