import React from "react";
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

  .chipContainer {
    display: flex;
    justify-content: space-around;
    margin: 15px 0px;
  }
  input {
    margin: 5px;
  }
`;

function KelvinToC() {
  const [outPut, setOutPut] = useState("");
  const [input, setInput] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  const kelvinHandler = () => {
    setOutPut((input - 273.15).toFixed(2) + " °C");
    return;
  };

  const celsiusHandler = () => {
    setOutPut((+input + 273.15).toFixed(2) + " K");
    return;
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
      <input required name="number" type="text" onChange={inputHandler}></input>
      <p>{outPut}</p>
    </CalcContainer>
  );
}

export default KelvinToC;
