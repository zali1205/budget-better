import { Box, CircularProgress, Typography } from "@mui/material";
import dayjs from "dayjs";
import useGetTotalCostMonthlyExpenses from "./useGetTotalCostMonthlyExpenses";

function TotalMonthlyExpenses() {
  const todaysDate = new dayjs().format("MMM, DD, YYYY");
  const { totalCostMonthlyExpenses, isLoading, isPending } =
    useGetTotalCostMonthlyExpenses(todaysDate);

  if (isLoading || isPending) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <CircularProgress size={50} />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyItems: "center",
        textAlign: "center",
        height: "100%",
        paddingY: 1,
        paddingX: 2,
      }}
    >
      <Typography variant="h6">Total Monthly Expenses</Typography>
      <Typography sx={{ paddingTop: 4 }} fontSize={30}>
        ${totalCostMonthlyExpenses}
      </Typography>
      <Typography sx={{ paddingTop: 4 }}>As of {todaysDate}</Typography>
    </Box>
  );
}

export default TotalMonthlyExpenses;
