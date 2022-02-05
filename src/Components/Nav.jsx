import React from "react";
import styled, { createGlobalStyle } from "styled-components";

export default function Nav() {
  return (
    <NavWrapper>
      <img src="/images/ONF-logo.png" alt="logo" height="50vw" />
    </NavWrapper>
  );
}

const NavWrapper = styled.div`
  background: black;
  display: flex;
`;