import React from "react";
import Chip from "@mui/material/Chip";
import { useState } from "react";
import swal from "sweetalert";
import CalcContainer from "./CalcContainer";



function CelsiusToF() {
  const [outPut, setOutPut] = useState("");
  const [input, setInput] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  const celsiusHandler = () => {
    setOutPut( +input*1.8+32+" F");
    return;
  };

  const fHandler = () => {
    setOutPut(((+input-32)/1.8).toFixed+" °C");
    return;
  };

  return (
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
      <input required name="number" type="text" onChange={inputHandler} placeholder="Celsius or Fahrenheit"></input>
      <p>{outPut}</p>
    </CalcContainer>
  );
}
export default CelsiusToF;
