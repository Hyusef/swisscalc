import Chip from '@material-ui/core/Chip';
import { useState } from "react";
import swal from "sweetalert";
import CalcContainer from "./CalcContainer";
import {motion} from "framer-motion";


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
    <motion.div
    whileHover={{scale:1.1
    }}
    >
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
    </motion.div>
  );
}

export default StepsToCals;
