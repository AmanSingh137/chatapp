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
      <div>Topbar</div>
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
  padding: 1rem 0;
`;
