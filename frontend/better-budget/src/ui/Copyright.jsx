import { Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="p" sx={{ my: 6, color: "text.secondary" }}>
      Copyright ©{" "}
      <Link component={RouterLink} to="/" color="inherit">
        Better Budget
      </Link>
      {" " + new Date().getFullYear()}
    </Typography>
  );
}

export default Copyright;
