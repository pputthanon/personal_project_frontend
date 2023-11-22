import { useState } from "react";
import axios from "../config/axios";

export const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
  // const [product, setProduct] = useState(null);

  // const productData = async (productId) => {
  //   try {
  //     const res = await axios.get(`/admin/product/productId}`)
  //     setProduct
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return <ProductContext.Provider>{children}</ProductContext.Provider>;
}
