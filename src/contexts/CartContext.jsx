import { createContext, useState } from "react";
import axios from "../config/axios";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [checkUpdateCart, setCheckUpdateCart] = useState(false);

  return (
    <CartContext.Provider value={{ checkUpdateCart, setCheckUpdateCart }}>
      {children}
    </CartContext.Provider>
  );
}
