import { Outlet } from "react-router-dom";
import AppBar from "./AppBar";
import { Box } from "@mui/material";

function AppLayout() {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          marginTop: "52.5px",
          p: 2,
          width: { sm: `calc(100% - ${240}px)` },
          height: "100vh",
          backgroundColor: "#f5f5f5",
          overflow: "auto",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

export default AppLayout;
