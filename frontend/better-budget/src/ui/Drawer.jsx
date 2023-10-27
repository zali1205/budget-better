import { List, ListItem, Drawer as MuiDrawer } from "@mui/material";

function Drawer({ open }) {
  return (
    <MuiDrawer variant="persistent" open={open}>
      <List>
        <ListItem>
          <p>Hello</p>
        </ListItem>
      </List>
    </MuiDrawer>
  );
}

export default Drawer;
