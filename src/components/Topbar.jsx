import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { logout, reset } from "../features/auth/authSlice";

const Topbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <TopbarStyles>
      <h2>Topbar</h2>

      <button
        onClick={() => {
          dispatch(logout());
          dispatch(reset());
          navigate("/login");
        }}
      >
        Logout
      </button>
    </TopbarStyles>
  );
};

export default Topbar;
const TopbarStyles = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.6rem 1rem;
  background-color: ${(props) => props.theme.primaryColor};
  button {
    height: 3rem;
    width: 5rem;
    border-radius: 40px;
    cursor: pointer;
  }
`;
