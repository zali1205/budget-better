import {
  Box,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import SpendingHistoryTableItem from "./SpendingHistoryTableItem";
import useGetExpenses from "./useGetExpense";

function SpendingHistoryTable() {
  const { expenses, isLoading, isFetching } = useGetExpenses();
  if (isFetching || isLoading) {
    return (
      <Box sx={{ display: "flex", alignItems: "center", height: "75vh" }}>
        <CircularProgress size={65} />
      </Box>
    );
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Store</TableCell>
            <TableCell>Expense Type</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell>Reoccuring</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Total Cost</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {expenses.map((expense) => (
            <SpendingHistoryTableItem expense={expense} key={expense.id} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default SpendingHistoryTable;
