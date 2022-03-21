import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
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
