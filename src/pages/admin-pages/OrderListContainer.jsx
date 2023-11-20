import { Link, useLocation } from "react-router-dom";
import OrderListCard from "./OrderListCard";

export default function OrderListContainer({ allOrder, setAllOrder }) {
  const { pathname } = useLocation();
  return (
    // <div className=" ">
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-2 mt-3 w-2/3">
        {allOrder?.map((el) => (
          <Link
            key={el.id}
            onClick={() => addPath(pathname)}
            to={`/admin/orderItems/${el.id}`}
          >
            <OrderListCard
              key={el.id}
              orderObj={el}
              setAllOrder={setAllOrder}
            />
          </Link>
        ))}
      </div>
    </div>
    // </div>
  );
}
