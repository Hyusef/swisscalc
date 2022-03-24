import React from "react";
import Chip from "@mui/material/Chip";
import { useState } from "react";
import swal from "sweetalert";
import CalcContainer from "./CalcContainer";

function KelvinToC() {
  const [outPut, setOutPut] = useState("");
  const [input, setInput] = useState("");
  const regex = /^(?:-)?\d+$/;
  const message = "Please enter a valid Kelvin or Celsius Value";

  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  const kelvinHandler = () => {
    console.log(input)
    if (input === "" || !regex.test(input)) {
      swal("Error", message, "error");
      return;
    }

    setOutPut((input - 273.15).toFixed(2) + " °C");
  };

  const celsiusHandler = () => {
    if (input === "" || !regex.test(input)) {
      swal("Error", message, "error");
      return;
    }
    setOutPut((+input + 273.15).toFixed(2) + " K");
  };

  return (
    <CalcContainer>
      <h2>Kelvin 🔄 Celsius </h2>    
      <div className="chipContainer">
        <Chip
          className="chip"
          variant="outlined"
          label="Kelvin To Celsius"
          onClick={kelvinHandler}
        />
        <Chip
          className="chip"
          variant="outlined"
          label="Celsius To Kelvin"
          onClick={celsiusHandler}
        />
      </div>
      <input
        required
        name="number"
        type="text"
        onChange={inputHandler}
        placeholder="Kelvin or Celsius"
      ></input>
      <p>{outPut}</p>
    </CalcContainer>
  );
}

export default KelvinToC;
