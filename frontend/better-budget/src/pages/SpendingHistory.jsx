import { Box } from "@mui/material";
import SpendingHistoryOperations from "../features/spending-history/SpendingHistoryOperations";
import SpendingHistoryTable from "../features/spending-history/SpendingHistoryTable";

function SpendingHistory() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <SpendingHistoryOperations />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", paddingTop: 2 }}>
        <SpendingHistoryTable />
      </Box>
    </>
  );
}

export default SpendingHistory;
