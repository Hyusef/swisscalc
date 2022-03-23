import * as React from "react";
import Paper from "@mui/material/Paper";
import styled from "styled-components";
import Chip from "@mui/material/Chip";
import { useState } from "react";
import swal from "sweetalert";

const CalcContainer = styled(Paper)`
  margin: 20px;
  width: 300px;
  text-align: center;
  dispay: flex;
  flex-direction: row;
  border: 1px solid pink;

  .chipContainer {
    display: flex;
    justify-content: space-around;
    margin: 15px 0px;
  }
`;

function HexRgb() {
  const [outPut, setOutPut] = useState("");
  const [input, setInput] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const hexToRgb = () => {
    var bigint = parseInt(input, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;
    setOutPut(r + "," + g + "," + b);
  };

  const rgbToHex = () => {};

  return (
    <CalcContainer>
      <h2>Hex 🔄 Rgb </h2>    
      <div className="chipContainer">
        <Chip
          className="chip"
          variant="outlined"
          label="Hex To Rgb"
          onClick={hexToRgb}
        />
        <Chip
          className="chip"
          variant="outlined"
          label="Rgb To Hex"
          onClick={rgbToHex}
        />
      </div>
      <input required name="number" type="text" onChange={inputHandler}></input>
      <p>{outPut}</p>
    </CalcContainer>
  );
}

export default HexRgb;
