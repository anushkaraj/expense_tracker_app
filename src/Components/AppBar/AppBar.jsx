import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import TemporaryDrawer from "./Drawer";
import { useState } from "react";

export default function ButtonAppBar() {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setOpenDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          {openDrawer && <TemporaryDrawer onClose= {()=>setOpenDrawer(false)}></TemporaryDrawer>}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Investments
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
