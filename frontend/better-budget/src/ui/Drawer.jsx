import { Box, List, ListItem, Drawer as MuiDrawer } from "@mui/material";

function Drawer({ mobileOpen, handleMobileOpen }) {
  const DrawerItems = (
    <List>
      <ListItem>
        <p>Helloffffffffffffffffffffffffffffffffffffffffffffffffff</p>
      </ListItem>
    </List>
  );

  return (
    <Box sx={{ width: { sm: 240 }, flexShrink: { sm: 0 } }}>
      <MuiDrawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleMobileOpen}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        {DrawerItems}
      </MuiDrawer>

      <MuiDrawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        {DrawerItems}
      </MuiDrawer>
    </Box>
  );
}

export default Drawer;
