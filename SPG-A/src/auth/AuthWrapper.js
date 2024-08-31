import { createContext, useContext, useState } from "react";
import {
  RenderMenu,
  RenderRoutes,
} from "../components/structure/RenderNavigation";
import axios from "axios";

const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);

export const AuthWrapper = () => {
  const [user, setUser] = useState({ name: "", isAuthenticated: false });

  const login = async (email, password) => {
    try {
      let res = await axios.post("http://localhost:3000/api/user/signin", {
        email: email,
        password: password,
      });
      if (res.data.message === "Login succeeded") {
        setUser({ name: res.data.token, isAuthenticated: true });
       console.log(res.data)
        localStorage.setItem('token',res.data.token)
      } 
      return res.data;
    } catch (e) {
      return e;
    }
  };
  const logout = () => {
    setUser({ ...user, isAuthenticated: false });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <>
        <RenderMenu />
        <RenderRoutes />
      </>
    </AuthContext.Provider>
  );
};
