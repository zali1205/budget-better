import { AppBar as MuiAppBar, Typography } from "@mui/material";
import Signout from "../features/authentication/Signout";
import AppBarMenuButton from "./AppBarMenuButton";
import Drawer from "./Drawer";
import { useState } from "react";

function AppBar() {
  const [openDrawer, setOpenDrawer] = useState(false);
  console.log(openDrawer);

  return (
    <>
      <MuiAppBar
        position="fixed"
        sx={{ flexDirection: "row", padding: 1, alignItems: "center" }}
      >
        <AppBarMenuButton setOpenDrawer={setOpenDrawer} />
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Dashboard
        </Typography>
        <Signout />
      </MuiAppBar>
      <Drawer open={openDrawer} />
    </>
  );
}

export default AppBar;
