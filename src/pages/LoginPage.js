import React, { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { setUser } from "../features/authSlice";

const LoginPage = () => {
  const distpatch = useDispatch();
  const [username, setUsername] = useState("");
  const login = () => {
    distpatch(setUser(username));
  };
  return (
    <div>
      <form action="" onSubmit={login}>
        <h2>Username</h2>
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
