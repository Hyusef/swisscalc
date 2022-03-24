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
  return (
    <CalcContainer>
      <h2>Download Time Calculator </h2>    
      <div className="chipContainer">
        <input
          required
          name="number"
          type="text"
          placeholder="Download speed in Mbps"
        ></input>
        <input
          required
          name="number"
          type="text"
          placeholder="File size in Gb"
        ></input>

        <Chip className="chip" variant="outlined" label="Calculate" />
      </div>
    </CalcContainer>
  );
}

export default DownloadCalc;
