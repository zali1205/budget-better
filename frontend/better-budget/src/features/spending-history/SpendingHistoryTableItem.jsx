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
import EditExpense from "./EditExpense";
import dayjs from "dayjs";

function SpendingHistoryTableItem({ expense }) {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleCloseMenu() {
    setAnchorEl(null);
  }

  function handleDelete() {
    handleOpenDeleteModal();
    handleCloseMenu();
  }

  function handleOpenDeleteModal() {
    setOpenDeleteModal(true);
  }

  function handleCloseDeleteModal() {
    setOpenDeleteModal(false);
  }

  function handleEdit() {
    handleOpenEditModal();
    handleCloseMenu();
  }

  function handleOpenEditModal() {
    setOpenEditModal(true);
  }

  function handleCloseEditModal() {
    setOpenEditModal(false);
  }

  return (
    <>
      <TableRow>
        <TableCell>{dayjs(expense.date).format("ddd MMM, D, YYYY")}</TableCell>
        <TableCell>{toTitleCase(expense.store_id.store_name)}</TableCell>
        <TableCell>{expense.expense_type}</TableCell>
        <TableCell>
          {toTitleCase(expense.payment_method_id.payment_type)}
          {expense.payment_method_id.payment_type === "cash"
            ? ""
            : ` - ${expense.payment_method_id.payment_last_four_digits}`}
        </TableCell>
        <TableCell>{!expense.reoccuring ? "No" : "Yes"}</TableCell>
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
            onClose={handleCloseMenu}
          >
            <MenuItem onClick={handleEdit}>
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
      <Modal open={openDeleteModal} onClose={handleCloseDeleteModal}>
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
              onClick={handleCloseDeleteModal}
            >
              Exit
            </Button>
          </Box>
        </Box>
      </Modal>
      <Modal open={openEditModal} onClose={handleCloseEditModal}>
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
          <EditExpense expense={expense} closeModal={handleCloseEditModal} />
          <Box
            sx={{ display: "flex", justifyContent: "center", paddingTop: 5 }}
          >
            <Button
              color="error"
              variant="contained"
              onClick={handleCloseEditModal}
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
