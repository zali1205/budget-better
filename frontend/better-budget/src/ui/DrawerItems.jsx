import { Link as RouterLink, useLocation } from "react-router-dom";
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

function DrawerItems() {
  const location = useLocation();
  const selected = location.pathname.split("/").at(1);

  const drawers = [
    {
      name: "Dashboard",
      icon: <DashboardIcon />,
      link: "dashboard",
    },
    {
      name: "My Budget",
      icon: <AttachMoneyIcon />,
      link: "my-budget",
    },
    {
      name: "Investments",
      icon: <TrendingUpIcon />,
      link: "investments",
    },
    {
      name: "Spending History",
      icon: <HistoryIcon />,
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
              <ListItemIcon sx={{ marginLeft: 1 }}>{drawer.icon}</ListItemIcon>
              <ListItemText sx={{ marginLeft: -2 }}>{drawer.name}</ListItemText>
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}

export default DrawerItems;
