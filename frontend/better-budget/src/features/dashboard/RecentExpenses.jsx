import {
  Box,
  CircularProgress,
  Link,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import useGetRecentExpenses from "./useGetRecentExpenses";
import RecentExpensesTableItem from "./RecentExpensesTableItem";

function RecentExpenses() {
  const { recentExpenses, isLoading, isPending } = useGetRecentExpenses(5);

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
        paddingY: 1,
        paddingX: 2,
        height: "100%",
      }}
    >
      <Box sx={{ textAlign: "center", flex: 1 }}>
        <Typography variant="h6">Recent Orders</Typography>
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Store</TableCell>
                <TableCell>Expense Type</TableCell>
                <TableCell>Payment Method</TableCell>
                <TableCell>Reoccuring</TableCell>
                <TableCell>Total Cost</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {recentExpenses.map((expense) => (
                <RecentExpensesTableItem
                  recentExpense={expense}
                  key={expense.id}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box sx={{ marginTop: "auto", paddingBottom: 1 }}>
        <Link component={RouterLink} to="/spending-history">
          See more recent expenses
        </Link>
      </Box>
    </Box>
  );
}

export default RecentExpenses;
