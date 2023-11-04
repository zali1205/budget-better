import { Box, Typography } from "@mui/material";
import SpendingHistoryOperations from "../features/spending-history/SpendingHistoryOperations";

function SpendingHistory() {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
      <Typography
        variant="h4"
        sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
      >
        <b>Spending History</b>
      </Typography>
      <SpendingHistoryOperations />
    </Box>
  );
}

export default SpendingHistory;
