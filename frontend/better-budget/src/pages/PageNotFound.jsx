import { Box, Button, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

function PageNotFound() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Stack spacing={2} sx={{ alignItems: "center" }}>
        <Typography variant="h1">404</Typography>
        <Typography variant="p">
          The page you requested, could not be found.
        </Typography>
        <Button component={RouterLink} variant="contained" to="/">
          GO TO HOMEPAGE
        </Button>
      </Stack>
    </Box>
  );
}

export default PageNotFound;
