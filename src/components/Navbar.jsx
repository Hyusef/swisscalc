import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import styled from "styled-components";
import logoSwiss from "../Assets/Images/swisscalcLogo.png";

const ImageLogo = styled.img`
  margin-top: 2%;
  margin-left: 2%;
  cursor: pointer;
`;

function Navbar() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="absolute" color="transparent" elevation={0}>
          <Toolbar>
            <ImageLogo src={logoSwiss}></ImageLogo>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Navbar;
