import { useEffect, useState } from "react";
import { useAuth } from "../hooks/use-auth";
import axios from "../config/axios";

export default function CheckoutPage() {
  return (
    <div>
      <div className="flex justify-center">
        <div className="w-2/3 ">
          <div className="bg-white flex justify-center">Check out</div>
          <div className="bg-blue-400">BaBaBa</div>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <div className="w-2/3 flex justify-end">
          <button className="border p-2 bg-purple-300">Confirm Order </button>
        </div>
      </div>
    </div>
  );
}
