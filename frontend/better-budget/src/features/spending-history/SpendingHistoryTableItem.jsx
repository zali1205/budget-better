import { TableCell, TableRow } from "@mui/material";
import { toTitleCase } from "../../utils/helper";

function SpendingHistoryTableItem({ expense }) {
  console.log(expense);

  return (
    <TableRow>
      <TableCell>{new Date(expense.date).toDateString()}</TableCell>
      <TableCell>{toTitleCase(expense.store_id.store_name)}</TableCell>
      <TableCell>{expense.expense_type}</TableCell>
      <TableCell>
        {toTitleCase(expense.payment_method_id.payment_type)}
        {expense.payment_method_id.payment_type === "cash"
          ? ""
          : ` - ${expense.payment_method_id.payment_last_four_digits}`}
      </TableCell>
      <TableCell>{!expense.reocurring ? "No" : "Yes"}</TableCell>
      <TableCell>{expense.description}</TableCell>
      <TableCell>${expense.total_cost.toFixed(2)}</TableCell>
    </TableRow>
  );
}

export default SpendingHistoryTableItem;
