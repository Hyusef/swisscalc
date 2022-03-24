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
    flex-direction: column;
  }
  input {
    margin: 9px;
  }
  .chip {
    margin: 5px;
  }
`;

function DownloadCalc() {
  const [outPut, setOutPut] = useState("");
  const [speed, setSpeed] = useState("");
  const [size, setSize] = useState("");

  const speedHandler = (e) => {
    setSpeed(e.target.value);
  };

  const sizeHandler = (e) => {
    setSize(e.target.value);
  };

  const chipHandler = (e) => {
    if (speed === "" || size === "") {
      swal("Error", "Enter A Speed and size", "error");
    }

    setOutPut((size * 1000) / (speed / 8) + "seconds");
  };

  return (
    <CalcContainer>
      <h2>Download Time Calculator </h2>    
      <div className="chipContainer">
        <input
          required
          name="number"
          type="text"
          placeholder="Download speed in Mbps"
          onChange={speedHandler}
        ></input>
        <input
          required
          name="number"
          type="text"
          placeholder="File size in Gb"
          onChange={sizeHandler}
        ></input>

        <Chip
          className="chip"
          variant="outlined"
          label="Calculate"
          onClick={chipHandler}
        />
      </div>
      <p>{outPut}</p>
    </CalcContainer>
  );
}

export default DownloadCalc;
