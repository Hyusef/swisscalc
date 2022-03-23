import React from 'react'
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
`;


function MbToGb() {
    return (
        <div>
            
        </div>
    )
}

export default MbToGb
