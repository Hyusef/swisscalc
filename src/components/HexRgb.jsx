import * as React from "react";
import Chip from '@material-ui/core/Chip';;
import { useState } from "react";
import swal from "sweetalert";
import CalcContainer from "./CalcContainer";
import { motion } from "framer-motion";

function HexRgb() {
  const [outPut, setOutPut] = useState("");
  const [input, setInput] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const hexToRgb = () => {
    const regex = /^(?:#)?[a-f0-9]+$/;
    const justDigits = input.replace("#", "");
    if (input === "" || justDigits.length !== 6 || !regex.test(input)) {
      swal("Error", "Enter A Valid Hex Number", "error");
      return;
    }
    var bigint = parseInt(justDigits, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;
    setOutPut(r + "," + g + "," + b);
  };

  const rgbToHex = () => {
    const regex = /^[0-9\s,.]+$/;
    if (input === "" || input.length > 11 || !regex.test(input)) {
      swal("Error", "Enter Valid RGB values seperated by comma", "error");
      return;
    }
    const rgbVals = input
      .split(/[\s,.]+/)
      .slice(0, 3)
      .map((el) =>
        el > 255 ? (el = 255) : el < 0 ? (el = 0) : (el = parseInt(el))
      );
    const red = rgbVals[0].toString(16);
    const green = rgbVals[1].toString(16);
    const blue = rgbVals[2].toString(16);

    setOutPut("#" + red + green + blue);
  };

  return (
    <motion.div whileHover={{ scale: 1.1 }}>
      <CalcContainer>
        <h2>Hex 🔄 Rgb </h2>    
        <div className="chipContainer">
          <Chip
            className="chip"
            variant="outlined"
            label="Hex To Rgb"
            onClick={hexToRgb}
          />
          <Chip
            className="chip"
            variant="outlined"
            label="Rgb To Hex"
            onClick={rgbToHex}
          />
        </div>
        <input
          required
          name="number"
          type="text"
          onChange={inputHandler}
          placeholder="Hex or RGB"
        ></input>
        <p>{outPut}</p>
      </CalcContainer>
    </motion.div>
  );
}

export default HexRgb;
