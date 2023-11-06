import { TableCell, TableRow } from "@mui/material";

function SpendingHistoryTableItem({ expense }) {
  return (
    <TableRow>
      <TableCell>{expense.date}</TableCell>
      <TableCell>{expense.store}</TableCell>
      <TableCell>{expense.expenseType}</TableCell>
      <TableCell>{expense.paymentMethod}</TableCell>
      <TableCell>{expense.reocurring === false ? "No" : "Yes"}</TableCell>
      <TableCell>{expense.description}</TableCell>
      <TableCell>{expense.totalCost}</TableCell>
    </TableRow>
  );
}

export default SpendingHistoryTableItem;
