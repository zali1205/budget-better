import { Outlet } from "react-router-dom";
import AppBar from "./AppBar";
import { Box } from "@mui/material";

function AppLayout() {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 5, width: { sm: `calc(100% - ${240}px)` } }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

export default AppLayout;
