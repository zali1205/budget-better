import { useState } from "react";
import {
  IconButton,
  Menu,
  MenuItem,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { toTitleCase } from "../../utils/helper";

function SpendingHistoryTableItem({ expense }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

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

      <TableCell sx={{ paddingX: 0, marginX: 0 }}>
        <IconButton id="menu-button" onClick={handleClick}>
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="menu-options"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem>
            <DeleteIcon fontSize="small" />
            <Typography sx={{ paddingLeft: 1 }}>Delete Expense</Typography>
          </MenuItem>
          <MenuItem>
            <EditIcon fontSize="small" />
            <Typography sx={{ paddingLeft: 1 }}>Edit Expense</Typography>
          </MenuItem>
        </Menu>
      </TableCell>
    </TableRow>
  );
}

export default SpendingHistoryTableItem;
