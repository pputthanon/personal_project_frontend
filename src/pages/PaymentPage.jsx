import { useRef } from "react";

export default function PaymentPage({ setFile }) {
  const input = useRef(null);

  return (
    <div className="flex justify-center mt-10 text-font">
      <form className="bg-white w-2/3 p-4 border rounded-xl ">
        <div className=" font-semibold text-xl spacing mb-2 ">
          Payment Inform
        </div>

        <hr className="border" />

        <div className="mb-2 mt-6 ml-6 grid grid-cols-2 mr-6">
          <div className="">
            <div className="flex gap-2">
              <img
                src="https://i.pinimg.com/564x/66/a4/9c/66a49ca49ba856eb5803a2f8ef59c5d7.jpg"
                className="w-6"
              />
              <div className="font-semibold">Siam Commercial Bank</div>
            </div>
            <div>Branch: Bang Lampu, Checking account</div>
            <div>Account Number: 003-3-10458-0</div>
          </div>
          <div className="border-l-2">
            <div className="flex gap-2 ml-6">
              <img
                src="https://i.pinimg.com/564x/a0/3c/f5/a03cf5e37b4b1d0b376ad04a6b39e0b3.jpg"
                className="w-6"
              />

              <div className="font-semibold">Kasikorn Bank </div>
            </div>
            <div className="ml-6">Branch: Bang Yi Khun, Checking account</div>
            <div className="ml-6">Account Number: 047-1-05221-3</div>
          </div>
        </div>

        <div className="ml-6 mt-4">
          <div className="font-semibold mb-1">Attach File</div>
          <input
            type="file"
            ref={input}
            onChange={(e) => {
              if (e.target.files[0]) {
                setFile(e.target.files[0]);
              }
            }}
          />
        </div>
      </form>
    </div>
  );
}
