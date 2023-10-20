import { useEffect, useState } from "react";
import { useAuth } from "../hooks/use-auth";
import axios from "../config/axios";

export default function CheckoutPage() {
  return (
    <div>
      <div className="flex justify-center">
        <div className="w-2/3 ">
          <div className="bg-white flex justify-center text-2xl mt-10 border rounded-t-xl py-2">
            Check out
          </div>
          <div className="bg-blue-400 border rounded-b-xl">
            <div>
              <div>Total Price</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <div className="w-2/3 flex justify-end ">
          <button className="border p-2 bg-purple-300 rounded-xl">
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
}
