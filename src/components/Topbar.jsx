import React from "react";
import styled from "styled-components";

const Topbar = () => {
  return (
    <TopbarStyles>
      <div>Topbar</div>
      <button>Logout</button>
    </TopbarStyles>
  );
};

export default Topbar;
const TopbarStyles = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
`;
