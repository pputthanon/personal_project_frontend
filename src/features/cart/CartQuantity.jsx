import { MinusIcon, PlusIcon } from "../../icons";

export default function CartQuantity({ bookObj }) {
  return (
    <div className="flex justify-center items-center gap-6">
      <div>
        <MinusIcon />
      </div>
      <div className="text-2xl">{bookObj.amount}</div>
      <div className="">
        <PlusIcon />
      </div>
    </div>
  );
}
