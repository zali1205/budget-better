import { AppBar as MuiAppBar, Typography, capitalize } from "@mui/material";
import Signout from "../features/authentication/Signout";
import { useState } from "react";
import AppBarMenuButton from "./AppBarMenuButton";
import Drawer from "./Drawer";
import { useLocation } from "react-router-dom";

function AppBar() {
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
        <Signout />
      </MuiAppBar>
      <Drawer mobileOpen={mobileOpen} handleMobileOpen={handleMobileOpen} />
    </>
  );
}

export default AppBar;
