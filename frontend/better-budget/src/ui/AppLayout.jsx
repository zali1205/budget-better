import { Outlet } from "react-router-dom";
import AppBar from "./AppBar";
import { Box } from "@mui/material";

function AppLayout() {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <AppBar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          marginTop: "52.5px",
          p: 2,
          width: { sm: `calc(100% - ${240}px)` },
          overflow: "auto",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

export default AppLayout;
