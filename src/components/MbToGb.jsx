import React from "react";
import Paper from "@mui/material/Paper";
import styled from "styled-components";
import Chip from "@mui/material/Chip";
import { useState } from "react";
import swal from "sweetalert";

const CalcContainer = styled(Paper)`
  margin: 20px;
  width: 350px;
  text-align: center;
  dispay: flex;
  flex-direction: row;
  border: 1px solid pink;

  .chipContainer {
    display: flex;
    justify-content: space-around;
    margin: 15px 0px;
  }
`;

function MbToGb() {
  const [outPut, setOutPut] = useState("");
  const [input, setInput] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const mbToGbHandler = () => {
    if (input === "" || input < 0) {
      swal("Error", "Please Enter a valid value", "error");
      return;
    }
    setOutPut((+input / 1000).toFixed(2) + " Gb");
  };

  const gbToMbHandler = () => {
    if (input === "" || input < 0) {
      swal("Error", "Please Enter a valid value", "error");
      return;
    }
    setOutPut(+input * 1000 + " Mb");
  };

  return (
    <CalcContainer>
      <h2>Megabytes 🔄 Gigabytes </h2>    
      <div className="chipContainer">
        <Chip
          className="chip"
          variant="outlined"
          label="Megabytes To Gigabytes"
          onClick={mbToGbHandler}
        />
        <Chip
          className="chip"
          variant="outlined"
          label="Gigabytes To Megabytes"
          onClick={gbToMbHandler}
        />
      </div>
      <input
        required
        name="number"
        type="number"
        onChange={inputHandler}
      ></input>
      <p>{outPut}</p>
    </CalcContainer>
  );
}

export default MbToGb;
