import { Box, CircularProgress, Typography } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import useGetTotalMonthlyExpenses from "./useGetTotalMonthlyExpenses";
import dayjs from "dayjs";

function TotalMonthlyExpensesPieChartBreakdown() {
  const todaysDate = new dayjs().format("MMM, DD, YYYY");
  const { monthlyExpenses, isLoading, isPending } =
    useGetTotalMonthlyExpenses(todaysDate);

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

  return (
    <Box
      sx={{
        paddingY: 1,
        paddingX: 2,
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
              valueFormatter: (item) => `$${item.value}`,
            },
          ]}
          width={400}
          height={190}
        />
      </Box>
    </Box>
  );
}

export default TotalMonthlyExpensesPieChartBreakdown;
