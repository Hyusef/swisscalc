import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "styled-components"

const Logo = styled(Typography)`
font-size:2.3rem;
font-family:Helvetica;
`

function Navbar() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
              <Logo>swisscalc</Logo>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Navbar;
