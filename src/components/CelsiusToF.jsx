import React from "react";
import Chip from '@material-ui/core/Chip';;
import { useState } from "react";
import swal from "sweetalert";
import CalcContainer from "./CalcContainer";
import {motion} from "framer-motion";

function CelsiusToF() {
  const [outPut, setOutPut] = useState("");
  const [input, setInput] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  const celsiusHandler = () => {
    const regex = /^(?:-)?\d+$/;
    if (input === "" || !regex.test(input)) {
      swal(
        "Error",
        "Please Enter A valid Celsius or Fahrenheit value",
        "error"
      );
      return;
    }
    setOutPut(+input * 1.8 + 32 + " F");
    return;
  };

  const fHandler = () => {
    const regex = /^(?:-)?\d+$/;
    if (input === "" || !regex.test(input)) {
      swal(
        "Error",
        "Please Enter A valid Celsius or Fahrenheit value",
        "error"
      );
      return;
    }
    setOutPut(((+input - 32) / 1.8).toFixed(2) + " °C");
    return;
  };

  return (
    <motion.div
    whileHover={{scale:1.1}}>
    <CalcContainer>
      <h2>Celsius 🔄 Fahrenheit </h2>    
      <div className="chipContainer">
        <Chip
          className="chip"
          variant="outlined"
          label="Celsius To Fahrenheit"
          onClick={celsiusHandler}
        />
        <Chip
          className="chip"
          variant="outlined"
          label="Fahrenheit to Celsius"
          onClick={fHandler}
        />
      </div>
      <input
        required
        name="number"
        type="text"
        onChange={inputHandler}
        placeholder="Celsius or Fahrenheit"
      ></input>
      <p>{outPut}</p>
    </CalcContainer>
    </motion.div>
  );
}
export default CelsiusToF;
