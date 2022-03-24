import React from "react";
import Chip from "@mui/material/Chip";
import { useState } from "react";
import swal from "sweetalert";
import CalcContainer from "./CalcContainer";


function StepsToCals() {
  const [outPut, setOutPut] = useState("");
  const [input, setInput] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  const stepsHandler = () => {
    const regex = /^\d+$/; 
    if (input === "" || !regex.test(input)) {
      swal("Error", "Please Enter An Integer", "error");
      return;
    }
    setOutPut("≈ "+ +input / 25 + " calories burned");
    return;
  };

  return (
    <CalcContainer>
      <h2>Pedometer Steps To Calories </h2>    
      <div className="chipContainer">
          <input
            required
            name="number"
            type="text"
            onChange={inputHandler}
            placeholder="Enter Steps"
          ></input>
        <Chip
          className="chip"
          variant="outlined"
          label="Calculate"
          onClick={stepsHandler}
        />
      </div>
      <p>{outPut}</p>
    </CalcContainer>
  );
}

export default StepsToCals;
