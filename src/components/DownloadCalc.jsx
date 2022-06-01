import React from "react";
import Chip from '@material-ui/core/Chip';
import { useState } from "react";
import swal from "sweetalert";
import CalcContainer from "./CalcContainer";
import {motion} from "framer-motion"


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
    const regex = /^\d+$/;

    if (speed === "" || size === ""||!regex.test(speed) || !regex.test(size)) {
      swal("Error", "Enter A Speed and size", "error");
      return;
    }

    setOutPut((size * 1000) / (speed / 8) + " seconds");
  };

  return (
    <motion.div
    whileHover={{scale:1.1}}>
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
    </motion.div>
  );
}

export default DownloadCalc;
