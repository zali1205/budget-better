import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import HistoryIcon from "@mui/icons-material/History";
import { Link as RouterLink, useLocation } from "react-router-dom";

function DrawerItems() {
  const location = useLocation();
  const selected = location.pathname.split("/").at(1);

  const drawerIconPadding = { paddingRight: 3 };

  const drawers = [
    {
      name: "Dashboard",
      icon: <DashboardIcon sx={drawerIconPadding} />,
      link: "dashboard",
    },
    {
      name: "My Budget",
      icon: <AttachMoneyIcon sx={drawerIconPadding} />,
      link: "budget",
    },
    {
      name: "Investments",
      icon: <TrendingUpIcon sx={drawerIconPadding} />,
      link: "investments",
    },
    {
      name: "Spending History",
      icon: <HistoryIcon sx={drawerIconPadding} />,
      link: "spending-history",
    },
  ];

  return (
    <List sx={{ marginTop: 5.5 }}>
      <Divider />
      {drawers.map((drawer) => {
        return (
          <ListItem key={drawer.name} disablePadding>
            <ListItemButton
              component={RouterLink}
              to={"/" + drawer.link}
              selected={drawer.link === selected}
            >
              <ListItemIcon>{drawer.icon}</ListItemIcon>
              <ListItemText>{drawer.name}</ListItemText>
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}

export default DrawerItems;
