import { CircularProgress, Container, Typography } from "@mui/material";
import dayjs from "dayjs";
import useGetTotalCostMonthlyExpenses from "./useGetTotalCostMonthlyExpenses";

function TotalMonthlyExpenses() {
  const todaysDate = new dayjs().format("MMM, DD, YYYY");
  const { totalCostMonthlyExpenses, isLoading, isPending } =
    useGetTotalCostMonthlyExpenses(todaysDate);

  if (isLoading || isPending) {
    return (
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <CircularProgress size={50} />
      </Container>
    );
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
      <Typography sx={{ paddingTop: 4 }} fontSize={30}>
        ${totalCostMonthlyExpenses}
      </Typography>
      <Typography sx={{ paddingTop: 4 }}>As of {todaysDate}</Typography>
    </Container>
  );
}

export default TotalMonthlyExpenses;
