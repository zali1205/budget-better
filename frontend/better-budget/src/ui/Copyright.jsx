import { Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="p" sx={{ my: 6 }}>
      Copyright ©{" "}
      <Link component={RouterLink} to="/">
        Better Budget
      </Link>
      {" " + new Date().getFullYear()}
    </Typography>
  );
}

export default Copyright;
