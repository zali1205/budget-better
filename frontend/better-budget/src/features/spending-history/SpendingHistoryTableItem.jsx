import { TableCell, TableRow } from "@mui/material";

function SpendingHistoryTableItem({ expense }) {
  return (
    <TableRow>
      <TableCell>{new Date(expense.date).toDateString()}</TableCell>
      <TableCell>{expense.store}</TableCell>
      <TableCell>{expense.expense_type}</TableCell>
      <TableCell>{expense.payment_method}</TableCell>
      <TableCell>{expense.reocurring === false ? "No" : "Yes"}</TableCell>
      <TableCell>{expense.description}</TableCell>
      <TableCell>${expense.total_cost}</TableCell>
    </TableRow>
  );
}

export default SpendingHistoryTableItem;
