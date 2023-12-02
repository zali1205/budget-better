import { CircularProgress, Container, Typography } from "@mui/material";
import dayjs from "dayjs";
import useGetTotalCostMonthlyExpenses from "./useGetTotalCostMonthlyExpenses";

function TotalMonthlyExpenses() {
  const todaysDate = new dayjs().format("MMM, DD, YYYY");
  const { totalCostMonthlyExpenses, isLoading, isPending } =
    useGetTotalCostMonthlyExpenses(todaysDate);

  if (isLoading || isPending) {
    return <CircularProgress />;
  }

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyItems: "center",
        textAlign: "center",
        height: "100%",
        paddingTop: 1,
      }}
    >
      <Typography variant="h6">Total Monthly Expenses</Typography>
      <Typography sx={{ paddingTop: 4 }} fontSize={25}>
        ${totalCostMonthlyExpenses}
      </Typography>
      <Typography sx={{ paddingTop: 2 }}>As of: {todaysDate}</Typography>
    </Container>
  );
}

export default TotalMonthlyExpenses;
