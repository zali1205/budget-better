import { Box, CircularProgress, Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";
import useGetLastThirtyDayExpenses from "./useGetLastThirtyDaysExpenses";

function LastThirtyDaysGraph() {
  const { lastThirtyDayExpenses, isLoading, isPending } =
    useGetLastThirtyDayExpenses();

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

  // Consolidating the expenses into each day
  let dayExpenses = {};
  lastThirtyDayExpenses.forEach((expense) => {
    if (dayExpenses[expense?.date] === undefined) {
      dayExpenses[expense.date] = 0;
    }
    dayExpenses[expense.date] += expense.total_cost;
  });

  // Genearting x-axis data which is the last 30 days.
  let lastDay = new Date(new Date().setDate(new Date().getDate() - 29));
  const xAxisDaysString = [];
  const xAxisDays = [];
  for (let i = 1; i <= 30; i++) {
    xAxisDays.push(lastDay);
    const dayString = `${lastDay.getFullYear()}-${(lastDay.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${lastDay.getDate().toString().padStart(2, "0")}`;
    xAxisDaysString.push(dayString);

    const newDate = new Date(new Date().setDate(new Date().getDate() - 29 + i));
    lastDay = newDate;
  }

  // Generating the y-axis data which is the total cost. Each index from the y-axis matches with the x-axis.
  const yAxisData = [];
  xAxisDaysString.forEach((day) => {
    const total = dayExpenses[day];
    if (total === undefined) {
      yAxisData.push(0);
    } else {
      yAxisData.push(total);
    }
  });

  const valueFormatter = (date) =>
    date.toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
    });

  return (
    <Box sx={{ textAlign: "center", paddingY: 1, paddingX: 2 }}>
      <Typography variant="h6">Last 30 Days Spending History</Typography>
      <LineChart
        xAxis={[
          {
            data: xAxisDays,
            scaleType: "point",
            valueFormatter,
          },
        ]}
        series={[
          {
            data: yAxisData,
            valueFormatter: (v) => `$${v.toFixed(2)}`,
            showMark: false,
          },
        ]}
        height={300}
      />
    </Box>
  );
}

export default LastThirtyDaysGraph;
