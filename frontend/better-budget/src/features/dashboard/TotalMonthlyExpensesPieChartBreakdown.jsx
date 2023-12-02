import { CircularProgress, Container, Typography } from "@mui/material";
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

  let expenseTypeObjects = {};

  // Consolidating expenseTypes into a single object.
  monthlyExpenses.forEach((expense) => {
    if (expenseTypeObjects[expense?.expense_type] === undefined) {
      expenseTypeObjects[expense.expense_type] = 0;
    }
    expenseTypeObjects[expense.expense_type] += expense.total_cost;
  });

  // Going through each key (which is an expenseType) and creating an array of objects for Piechart.
  let index = 0;
  const monthlyExpensesData = [];
  for (const key in expenseTypeObjects) {
    monthlyExpensesData.push({
      index,
      value: expenseTypeObjects[key],
      formattedValue: "$" + expenseTypeObjects[key],
      label: key,
    });
    index++;
  }

  return (
    <Container
      sx={{
        paddingTop: 1,
        textAlign: "center",
      }}
    >
      <Typography variant="h6">Total Monthly Breakdown</Typography>
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
    </Container>
  );
}

export default TotalMonthlyExpensesPieChartBreakdown;
