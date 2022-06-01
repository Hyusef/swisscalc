import * as React from "react";
import Chip from '@material-ui/core/Chip';;
import { useState } from "react";
import swal from "sweetalert";
import CalcContainer from "./CalcContainer";
import { motion } from "framer-motion";

function DecimalHex() {
  const [outPut, setOutPut] = useState("");
  const [input, setInput] = useState("");
  const digits = input.split("").map((el) => Number(el));

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const HexToDecimal = () => {
    const regex = /^(?:#)?[a-f0-9]+$/;
    const justDigits = input.replace("#", "");
    if (input === "" || !regex.test(input) || digits[0] === 0) {
      swal("Error", "Please Enter A Valid Decimal Number", "error");
      return;
    }
    setOutPut(parseInt(justDigits, 16));
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
    <motion.div whileHover={{ scale: 1.1 }}>
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
        <input
          required
          name="number"
          type="text"
          onChange={inputHandler}
          placeholder="Decimal or Hex"
        ></input>
        <p>{outPut}</p>
      </CalcContainer>
    </motion.div>
  );
}

export default DecimalHex;
