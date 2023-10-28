import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function AppBarMenuButton({ handleMobileOpen }) {
  return (
    <IconButton
      aria-label="menu-button"
      color="inherit"
      onClick={handleMobileOpen}
      sx={{ mr: 2, display: { sm: "none" } }}
    >
      <MenuIcon />
    </IconButton>
  );
}

export default AppBarMenuButton;
