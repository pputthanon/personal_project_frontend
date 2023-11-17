import { useState } from "react";

export const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
  const [product, setProduct] = useState(null);

  return <ProductContext.Provider>{children}</ProductContext.Provider>;
}
