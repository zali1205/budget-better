import { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Modal,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { toTitleCase } from "../../utils/helper";
import DeleteExpense from "./DeleteExpense";

function SpendingHistoryTableItem({ expense }) {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function handleDelete() {
    handleOpenModal();
    handleClose();
  }

  function handleOpenModal() {
    setOpenDeleteModal(true);
  }

  function handleCloseModal() {
    setOpenDeleteModal(false);
  }

  return (
    <>
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
              <EditIcon fontSize="small" />
              <Typography sx={{ paddingLeft: 1 }}>Edit Expense</Typography>
            </MenuItem>
            <MenuItem onClick={handleDelete}>
              <DeleteIcon fontSize="small" />
              <Typography sx={{ paddingLeft: 1 }}>Delete Expense</Typography>
            </MenuItem>
          </Menu>
        </TableCell>
      </TableRow>
      <Modal open={openDeleteModal} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "30%",
            left: "40%",
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            width: "500px",
            p: 4,
          }}
        >
          <DeleteExpense expense={expense} />
          <Box
            sx={{ display: "flex", justifyContent: "center", paddingTop: 5 }}
          >
            <Button
              color="error"
              variant="contained"
              onClick={handleCloseModal}
            >
              Exit
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default SpendingHistoryTableItem;
