import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { logout, reset } from "../features/auth/authSlice";

const Topbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <TopbarStyles>
      <h2>Campus</h2>
      <div>
        <button>
          <Link to="/posts" style={{ textDecoration: "none" }}>
            Posts
          </Link>
        </button>

        <button>
          <Link to="/chats" style={{ textDecoration: "none" }}>
            Chats
          </Link>
        </button>

        <button
          onClick={() => {
            dispatch(logout());
            dispatch(reset());
            navigate("/login");
          }}
        >
          Logout
        </button>
      </div>
    </TopbarStyles>
  );
};

export default Topbar;
const TopbarStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem 1rem;
  background-color: ${(props) => props.theme.primaryColor};
  border-bottom: 1px solid rgb(222, 215, 215);

  button {
    text-decoration: none;
    height: 3rem;
    width: 5rem;
    border-radius: 40px;
    cursor: pointer;
    margin-left: 1rem;
  }
`;
