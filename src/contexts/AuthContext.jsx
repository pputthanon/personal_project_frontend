import { createContext, useState, useEffect } from "react";
import axios from "../config/axios";
import {
  addAccessToken,
  getAccessToken,
  removeAccessToken,
} from "../utils/local-storage";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (getAccessToken()) {
      axios
        .get("/auth/me")
        .then((res) => {
          // console.log(res.data);
          setAuthUser(res.data.user);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  const register = async (registerInputObj) => {
    const res = await axios.post("/auth/register", registerInputObj);
    console.log(res);
    addAccessToken(res.data.accessToken);
    setAuthUser(res.data.user);
  };

  const login = async (credential) => {
    const res = await axios.post("/auth/login", credential);
    console.log(res);
    addAccessToken(res.data.accessToken);
    setAuthUser(res.data.user);
  };

  const logout = () => {
    removeAccessToken();
    setAuthUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ register, login, logout, loading, authUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}
