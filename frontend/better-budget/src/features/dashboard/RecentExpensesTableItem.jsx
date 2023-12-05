import { TableCell, TableRow } from "@mui/material";
import { toTitleCase } from "../../utils/helper";

function RecentExpensesTableItem({ recentExpense }) {
  return (
    <TableRow>
      <TableCell>{recentExpense.date}</TableCell>
      <TableCell>{toTitleCase(recentExpense.store_id.store_name)}</TableCell>
      <TableCell>{recentExpense.expense_type}</TableCell>
      <TableCell>
        {toTitleCase(recentExpense.payment_method_id.payment_type)}
        {recentExpense.payment_method_id.payment_type === "cash"
          ? ""
          : ` - ${recentExpense.payment_method_id.payment_last_four_digits}`}
      </TableCell>
      <TableCell>{!recentExpense.reoccuring ? "No" : "Yes"}</TableCell>
      <TableCell>${recentExpense.total_cost.toFixed(2)}</TableCell>
    </TableRow>
  );
}

export default RecentExpensesTableItem;
