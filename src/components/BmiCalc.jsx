import React from "react";
import Chip from "@mui/material/Chip";
import { useState } from "react";
import swal from "sweetalert";
import CalcContainer from "./CalcContainer";



function BmiCalc() {
  const [outPut, setOutPut] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const heightHandler = (e) => {
    setHeight(e.target.value);
  };

  const weightHandler = (e) => {
    setWeight(e.target.value);
  };

  const bmiHandler = (e) => {
    if (weight === "" || height === "") {
      swal("Error", "Please enter height and width", "error");
      return;
    }

    setOutPut(
      "Your BMI is: " + (weight / Math.pow(height / 100, 2)).toFixed(2)
    );
  };

  return (
    <CalcContainer>
      <h2>BMI Calculator </h2>    
      <div className="chipContainer">
        <input
          required
          name="weight"
          type="number"
          placeholder="Enter weight In KG"
          onChange={weightHandler}
        ></input>

        <input
          required
          name="height"
          type="number"
          placeholder="Enter height in CM"
          onChange={heightHandler}
        ></input>
        <Chip
          className="chip"
          variant="outlined"
          label="Calculate BMI"
          onClick={bmiHandler}
        />
      </div>
      <p>{outPut}</p>
    </CalcContainer>
  );
}

export default BmiCalc;
