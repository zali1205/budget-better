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
          paddingX: 5,
        }}
      >
        <SpendingHistoryOperations />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          paddingTop: 2,
          paddingX: 5,
        }}
      >
        <SpendingHistoryTable />
      </Box>
    </>
  );
}

export default SpendingHistory;
