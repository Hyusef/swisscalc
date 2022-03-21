import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import backgroundImage from "../Assets/Images/backgroundSwiss.svg";

const MainHeaderContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${backgroundImage});
  background-position: center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  -o-background-size: cover;
`;

function Header() {
  return (
    <MainHeaderContainer>
      <Navbar />
    </MainHeaderContainer>
  );
}
export default Header;
