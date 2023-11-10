import {
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

const mockExpense = [
  {
    id: 1,
    date: new Date().toDateString(),
    store: "Walmart",
    expenseType: "Grocery",
    paymentMethod: "Visa - 8054",
    reocurring: false,
    description: "Clothes",
    totalCost: "$23.54",
  },
];

function SpendingHistoryTable() {
  const { expenses, isLoading } = useGetExpenses();

  if (isLoading) {
    return <CircularProgress />;
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
