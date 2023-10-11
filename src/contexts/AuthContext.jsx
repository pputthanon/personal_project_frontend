import { createContext, useState } from "react";
import axios from "../config/axios";
import {
  addAccessToken,
  getAccessToken,
  removeAccessToken,
} from "../utils/local-storage";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);

  const register = async (registerInputObj) => {
    const res = await axios.post("/auth/register", registerInputObj);
    addAccessToken(res.data.accessToken);
    setAuthUser(res.data.user);
  };

  return (
    <AuthContext.Provider value={{ register }}>{children}</AuthContext.Provider>
  );
}
