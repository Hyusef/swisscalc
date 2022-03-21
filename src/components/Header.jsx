import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";

const MainHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  background: linear-gradient(90deg, #e74d4d, #8c000c);
  background-size: 200% 100%;
  animation: gradient 30s alternate infinite;
  position: absolute;
  top: 0;
  left: 0;
  height: 80vh;
  width: 100%;

  @keyframes gradient {
    0% {
      background-position: 0%;
    }
    100% {
      background-position: 100%;
    }
  }
`;

const Imgu = styled.img`
  width: 70%;
  margin: 15%;
`;

const Headers = styled.h1`
  font-size: 4rem;
  color: white;
  font-family: "Source Serif Pro", serif;
`;

const HeadersContainer = styled.div`
  margin-top: 10%;
  p {
    color: #ffffff;
    font-size: 1.8rem;
    font-weight: 300;
    font-family: "Source Serif Pro", serif;
    text-align: center;
  }
`;

function Header() {
  return (
    <MainHeaderContainer>
      <Navbar />
      <HeadersContainer>
        <Headers>Multi-Purpose Swiss Calculator</Headers>
        <p>Just like the Swiss knife, the Swiss calc is a powerful tool.</p>
      </HeadersContainer>
    </MainHeaderContainer>
  );
}
export default Header;
