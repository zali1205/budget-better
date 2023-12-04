import { Box, CircularProgress, Container, Typography } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import useGetTotalMonthlyExpenses from "./useGetTotalMonthlyExpenses";
import dayjs from "dayjs";

function TotalMonthlyExpensesPieChartBreakdown() {
  const todaysDate = new dayjs().format("MMM, DD, YYYY");
  const { monthlyExpenses, isLoading, isPending } =
    useGetTotalMonthlyExpenses(todaysDate);

  if (isLoading || isPending) {
    return <CircularProgress />;
  }

  let expenseTypeTotalCosts = {};

  // Consolidating all of the expenses to get the totals.
  monthlyExpenses.forEach((expense) => {
    if (expenseTypeTotalCosts[expense?.expense_type] === undefined) {
      expenseTypeTotalCosts[expense.expense_type] = 0;
    }
    expenseTypeTotalCosts[expense.expense_type] += expense.total_cost;
  });

  // Going through each key (which is an expenseType) and creating an array of objects for Piechart.
  let index = 0;
  const monthlyExpensesData = [];
  for (const key in expenseTypeTotalCosts) {
    monthlyExpensesData.push({
      index,
      value: expenseTypeTotalCosts[key],
      formattedValue: "$" + expenseTypeTotalCosts[key],
      label: key,
    });
    index++;
  }

  console.log(monthlyExpenses);

  return (
    <Container
      sx={{
        paddingTop: 1,
        textAlign: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h6">Total Monthly Breakdown</Typography>
      <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
        <PieChart
          series={[
            {
              arcLabel: (item) => `$${item.value}`,
              arcLabelMinAngle: 50,
              data: monthlyExpensesData,
            },
          ]}
          width={400}
          height={190}
        />
      </Box>
    </Container>
  );
}

export default TotalMonthlyExpensesPieChartBreakdown;
