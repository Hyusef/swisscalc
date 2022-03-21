import * as React from "react";
import Paper from "@mui/material/Paper";
import styled from "styled-components";
import Chip from "@mui/material/Chip";
import { useState } from "react";
import swal from "sweetalert";

const CalcContainer = styled(Paper)`
  width: 300px;
  padding: 50px;
  margin: 50px;
`;

var binary = "101101";
var decimal = parseInt(binary, 2); /*Binary to decimal */
/*Number(decimal).toString(2)) Decimal To Binary */

function CalcCard() {
  const [outPut, setOutPut] = useState("");
  const [input, setInput] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const digits = input.split("").map((el) => Number(el));
  const notBinary = (val) => val == 1 || val == 0;

  const BinaryToDecimal = () => {
    if (input === "" || !digits.every(notBinary)) {
      swal("Error", "Please Enter A Binary Number", "error");
      return;
    }
    setOutPut(parseInt(input, 2));
  };

  const DecimalToBinary = () => {
    if (input === "" || digits[0] == 0) {
      swal("Error", "Please Enter A Decimal Number", "error");
    }
    setOutPut(Number(input).toString(2));
  };

  const NonNumericalInput = (e) => {
    var charCode = typeof e.which == "undefined" ? e.keyCode : e.which;
    var charStr = String.fromCharCode(charCode);

    if (!charStr.match(/^[0-9]+$/)) e.preventDefault();
  };

  return (
    <CalcContainer>
      <h2>Binary 🔄 Decimal </h2>    
      <Chip
        variant="outlined"
        label="Binary To Decimal"
        onClick={BinaryToDecimal}
      />
      <Chip
        variant="outlined"
        label="Decimal To Binary"
        onClick={DecimalToBinary}
      />
      <input
        required
        name="number"
        type="number"
        onChange={inputHandler}
        onKeyPress={NonNumericalInput}
      ></input>
      <p>{outPut}</p>
    </CalcContainer>
  );
}

export default CalcCard;
