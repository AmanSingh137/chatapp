import React from "react";
import styled from "styled-components";
import SignOut from "./SignOut";

function NavBar() {
  return (
    <Nav>
      <div className="nav-left">
        <div className="logo online">
          <img src="/images/looseleaf.png" />
        </div>

        <h1>ChatAtCampus</h1>
      </div>
      <div className="nav-right">
        <SignOut />
      </div>
    </Nav>
  );
}

export default NavBar;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: black;
  padding: 5px 5%;
  position: sticky;
  top: 0;
  z-index: 100;
  height: 100%;
  //width: 100vw;

  .nav-left {
    display: flex;
    align-items: center;

    .logo img {
      height: 45px;
      width: 45px;
      border-radius: 50%;
      cursor: pointer;
    }

    .online {
      position: relative;
    }

    .online::after {
      content: "";
      width: 7px;
      height: 7px;
      border: 2px solid #fff;
      border-radius: 50%;
      background: #41db51;
      position: absolute;
      top: 0;
      right: 0;
    }

    h1 {
      font-family: "Brush Script MT", cursive;
      margin-left: 15px;
      font-size: 30px;
      color: white;
    }
  }
`;
