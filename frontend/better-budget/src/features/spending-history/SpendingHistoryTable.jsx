import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import SpendingHistoryTableItem from "./SpendingHistoryTableItem";

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
          {mockExpense.map((expense) => (
            <SpendingHistoryTableItem expense={expense} key={expense.id} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default SpendingHistoryTable;
