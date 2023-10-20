export default function CartHeader() {
  return (
    <div className="flex justify-center mt-10 ">
      <div className="w-2/3 bg-white text-xl font-semibold rounded-t-xl">
        <div className="flex  p-4 text-font border shadow rounded-t-xl">
          <div className="grid grid-cols-5 w-full  ml-20 mr-20">
            <div className="flex col-span-2 gap-6">Product List</div>
            <div className="flex justify-center items-center gap-6">
              Quantity
            </div>
            <div className="flex items-center justify-center gap-4">Price</div>
            <div className="flex items-center justify-center gap-4">
              Summary
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
