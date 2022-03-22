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

function DecimalHex() {
  const [outPut, setOutPut] = useState("");
  const [input, setInput] = useState("");
  const digits = input.split("").map((el) => Number(el));

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const HexToDecimal = () => {
    const regex = /^[a-f0-9]+$/;
    console.log(regex.test(input));
    if (input === "" || !regex.test(input) || digits[0] === 0) {
      swal("Error", "Please Enter A Valid Decimal Number", "Error");
      return;
    }
    setOutPut(parseInt(input, 16));
  };

  const DecimalToHex = () => {
    const regex = /^\d+$/;
    if (input === "" || !regex.test(input) || digits[0] === 0) {
      swal("Error", "Please Enter A Valid Decimal Number", "error");
      return;
    }
    setOutPut(Number(input).toString(16));
  };

  return (
    <CalcContainer>
      <h2>Hex 🔄 Decimal </h2>    
      <div className="chipContainer">
        <Chip
          className="chip"
          variant="outlined"
          label="Hex To Decimal"
          onClick={HexToDecimal}
        />
        <Chip
          className="chip"
          variant="outlined"
          label="Decimal To Hex"
          onClick={DecimalToHex}
        />
      </div>
      <input required name="number" type="text" onChange={inputHandler}></input>
      <p>{outPut}</p>
    </CalcContainer>
  );
}

export default DecimalHex;
