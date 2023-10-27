import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function AppBarMenuButton({ setOpenDrawer }) {
  function handleClick() {
    setOpenDrawer((open) => !open);
  }

  return (
    <IconButton aria-label="menu-button" color="inherit" onClick={handleClick}>
      <MenuIcon />
    </IconButton>
  );
}

export default AppBarMenuButton;
