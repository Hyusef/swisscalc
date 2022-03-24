import * as React from "react";
import Chip from "@mui/material/Chip";
import { useState } from "react";
import swal from "sweetalert";
import CalcContainer from "./CalcContainer";
import { motion } from "framer-motion";

function CalcCard() {
  const [outPut, setOutPut] = useState("");
  const [input, setInput] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const digits = input.split("").map((el) => Number(el));
  const notBinary = (val) => val === 1 || val === 0;

  const BinaryToDecimal = () => {
    if (input === "" || !digits.every(notBinary)) {
      swal("Error", "Please Enter A Binary Number", "error");
      return;
    }
    setOutPut(parseInt(input, 2));
  };

  const DecimalToBinary = () => {
    if (input === "" || digits[0] === 0) {
      swal("Error", "Please Enter A Decimal Number", "error");
      return;
    }
    setOutPut(Number(input).toString(2));
  };

  const NonNumericalInput = (e) => {
    var charCode = typeof e.which == "undefined" ? e.keyCode : e.which;
    var charStr = String.fromCharCode(charCode);

    if (!charStr.match(/^[0-9]+$/)) e.preventDefault();
  };

  return (
    <motion.div whileHover={{ scale: 1.1 }}>
      <CalcContainer>
        <h2>Binary 🔄 Decimal </h2>    
        <div className="chipContainer">
          <Chip
            className="chip"
            variant="outlined"
            label="Binary To Decimal"
            onClick={BinaryToDecimal}
          />
          <Chip
            className="chip"
            variant="outlined"
            label="Decimal To Binary"
            onClick={DecimalToBinary}
          />
        </div>
        <input
          required
          name="number"
          type="number"
          onChange={inputHandler}
          onKeyPress={NonNumericalInput}
          placeholder="Binary or Decimal"
        ></input>
        <p>{outPut}</p>
      </CalcContainer>
    </motion.div>
  );
}

export default CalcCard;
