import React from "react";
import styled from "styled-components";
import BinaryDec from "./BinaryDec";
import BmiCalc from "./BmiCalc";
import CelsiusToF from "./CelsiusToF";
import DecimalHex from "./DecimalHex";
import DownloadCalc from "./DownloadCalc";
import HexRgb from "./HexRgb";
import KelvinToC from "./KelvinToC";
import MbToGb from "./MbToGb";
import MbToKb from "./MbToKb";
import StepsToCals from "./StepsToCals";

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  box-sizing: border-box;
  margin: auto;
  justify-content: space-around;
`;

function AllCalcsWrapper() {
  return (
    <StyledWrapper>
      <BinaryDec />
      <DecimalHex />
      <HexRgb />
      <MbToGb />
      <MbToKb />
      <BmiCalc />
      <DownloadCalc />
      <KelvinToC />
      <CelsiusToF />
      <StepsToCals />
    </StyledWrapper>
  );
}

export default AllCalcsWrapper;
