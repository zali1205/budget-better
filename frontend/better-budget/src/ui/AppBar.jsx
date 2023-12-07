import { useState } from "react";
import { IconButton, AppBar as MuiAppBar, Typography } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useLocation } from "react-router-dom";
import { useColorMode } from "../features/contexts/ColorModeContext";
import Signout from "../features/authentication/Signout";
import AppBarMenuButton from "./AppBarMenuButton";
import Drawer from "./Drawer";

function AppBar() {
  const { colorMode, mode } = useColorMode();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const selected = location.pathname.split("/").at(1);
  const selectedFiltered = selected.replace("-", " ");

  function handleMobileOpen() {
    setMobileOpen((open) => !open);
  }

  return (
    <>
      <MuiAppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${240}px)` },
          ml: { sm: `${240}px` },
          flexDirection: "row",
          padding: 1,
          alignItems: "center",
        }}
      >
        <AppBarMenuButton handleMobileOpen={handleMobileOpen} />
        <Typography
          variant="h6"
          nowrap="true"
          sx={{ flexGrow: 1, textTransform: "capitalize" }}
        >
          {selectedFiltered}
        </Typography>
        <IconButton onClick={colorMode.toggleColorMode} color="inherit">
          {mode === "light" ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
        <Signout />
      </MuiAppBar>
      <Drawer mobileOpen={mobileOpen} handleMobileOpen={handleMobileOpen} />
    </>
  );
}

export default AppBar;
