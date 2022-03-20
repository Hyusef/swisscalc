import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import styled from "styled-components";

const Logo = styled(Typography)`
  font-size: 2.3rem;
  font-family: Helvetica;
  color: white;
  span{
    background:red;
    padding:0px 6.5px;
    border-radius:6.5px;
  }
`;

function Navbar() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" color="transparent" elevation={0}>
          <Toolbar>
            <Logo> swisscalc <span>+</span> </Logo>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Navbar;
