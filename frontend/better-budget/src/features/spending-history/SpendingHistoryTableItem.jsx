import { TableCell, TableRow } from "@mui/material";
import { toTitleCase } from "../../utils/helper";

function SpendingHistoryTableItem({ expense }) {
  return (
    <TableRow>
      <TableCell>{new Date(expense.date).toDateString()}</TableCell>
      <TableCell>{toTitleCase(expense.store.store_name)}</TableCell>
      <TableCell>{expense.expense_type}</TableCell>
      <TableCell>{expense.payment_method}</TableCell>
      <TableCell>{!expense.reocurring ? "No" : "Yes"}</TableCell>
      <TableCell>{expense.description}</TableCell>
      <TableCell>${expense.total_cost.toFixed(2)}</TableCell>
    </TableRow>
  );
}

export default SpendingHistoryTableItem;
