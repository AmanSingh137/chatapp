import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";
import { setUser, login, reset } from "../features/auth/authSlice";

const LoginPage = () => {
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (store) => store.auth
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(login(username));
  };

  useEffect(() => {
    if (isError) {
      console.log("error occuere in loginpage");
    }
    if (isSuccess || user) {
      navigate(`/${user?.role}`);
    } else {
      dispatch(reset());
    }
  }, [user, isError, isSuccess, message, navigate, dispatch]);
  return (
    <div>
      <form action="" onSubmit={loginHandler}>
        <h2>Username</h2>
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
