import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";
import { setUser, login, reset } from "../features/auth/authSlice";
import styled from "styled-components";

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
    <Loginpage>
      <form className="Form" onSubmit={loginHandler}>
        <H2>Sign In</H2>
        <Input>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Button type="submit">Login</Button>
        </Input>
      </form>
    </Loginpage>
  );
};

export default LoginPage;

const Loginpage = styled.div`
  background-image: url("/images/login.jpg");
  background-size: cover;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .Form {
    padding: 100px;
    border: 1px solid blue;
    border-radius: 10px;
    background-color: rgba(0, 116, 217, 0.4);

    height: 200px;
  }
`;

const H2 = styled.h2`
  margin: 5%;
`;

const Input = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

const Button = styled.button`
  background: green;
  color: white;
  margin-top: 5px;
  border-radius: 10px;
`;
