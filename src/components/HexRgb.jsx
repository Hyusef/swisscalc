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
  .chip {
  }

  .chipContainer {
    display: flex;
    justify-content: space-around;
    margin: 15px 0px;
  }
`;

function HexRgb() {
  const [outPut, setOutPut] = useState("");
  const [input, setInput] = useState("");

  return (
    <CalcContainer>
      <h2>Hex 🔄 Decimal </h2>    
      <div className="chipContainer">
        <Chip
          className="chip"
          variant="outlined"
          label="RGB To Decimal"
          onClick={rgbToDecimal}
        />
        <Chip
          className="chip"
          variant="outlined"
          label="Decimal To Rgb"
          onClick={decimalToHex}
        />
      </div>
      <input required name="number" type="text" onChange={inputHandler}></input>
      <p>{outPut}</p>
    </CalcContainer>
  );
}

export default HexRgb;
