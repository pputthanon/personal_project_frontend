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
      getUser();
    } else {
      setLoading(false);
    }
  }, []);

  const register = async (registerInputObj) => {
    const res = await axios.post("/auth/register", registerInputObj);
  };

  const login = async (credential) => {
    const res = await axios.post("/auth/login", credential);
    addAccessToken(res.data.accessToken);
    setAuthUser(res.data.user);
    return res.data.user;
  };

  const update = async (updateInputObj) => {
    const res = await axios.patch("/account/edit", updateInputObj);
  };

  const logout = () => {
    removeAccessToken();
    setAuthUser(null);
  };
  const getUser = async () => {
    try {
      const res = await axios.get("/auth/me");
      setAuthUser(res.data.user);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        register,
        login,
        logout,
        update,
        loading,
        authUser,
        setAuthUser,
        getUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
