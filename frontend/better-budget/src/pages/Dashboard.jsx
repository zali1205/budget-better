import { Box, Grid, Paper } from "@mui/material";
import TotalMonthlyExpenses from "../features/dashboard/TotalCostMonthlyExpenses";
import TotalMonthlyExpensesPieChartBreakdown from "../features/dashboard/TotalMonthlyExpensesPieChartBreakdown";
import LastThirtyDaysGraph from "../features/dashboard/LastThirtyDaysGraph";
import RecentExpenses from "../features/dashboard/RecentExpenses";

function Dashboard() {
  return (
    <Box maxWidth="large">
      <Grid container spacing={3} sx={{ paddingY: 2, paddingX: 5 }}>
        <Grid item xs={12} md={3}>
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              height: 240,
              bgcolor: "background.paper",
            }}
          >
            <TotalMonthlyExpenses />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              height: 240,
              bgcolor: "background.paper",
            }}
          >
            <TotalMonthlyExpensesPieChartBreakdown />
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              height: 240,
              bgcolor: "background.paper",
            }}
          >
            <div>Total Expenses</div>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={12}>
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              height: 350,
              bgcolor: "background.paper",
            }}
          >
            <LastThirtyDaysGraph />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              height: 300,
              bgcolor: "background.paper",
            }}
          >
            <RecentExpenses />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;
