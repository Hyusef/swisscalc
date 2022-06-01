import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
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
  overflow:scroll;
`;

export default CalcContainer
