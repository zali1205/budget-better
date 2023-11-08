import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
} from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { useState } from "react";
import AddExpense from "./AddExpense";

function SpendingHistoryOperations() {
  const [sortBySelection, setSortBySelection] = useState("");
  const [filterBySelection, setFilterBySelection] = useState("");
  const [fromDate, setFromDate] = useState(dayjs());
  const [toDate, setToDate] = useState(dayjs());
  const [openAddExpenseModal, setOpenAddExpenseModal] = useState(false);

  function handleFilterChange(event) {
    setFilterBySelection(event.target.value);
  }

  function handleSortChange(event) {
    setSortBySelection(event.target.value);
  }

  function handleSearchClick() {
    console.log("Searching");
  }

  function handleOpenAddExpenseModal() {
    setOpenAddExpenseModal(true);
  }

  function handleCloseAddExpenseModal() {
    setOpenAddExpenseModal(false);
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Button
          sx={{ height: "40px" }}
          variant="contained"
          onClick={handleOpenAddExpenseModal}
        >
          Add Expense
        </Button>
      </Box>
      <DesktopDatePicker
        label="From"
        slotProps={{ textField: { size: "small" } }}
        sx={{ paddingRight: 1, width: 200 }}
        value={fromDate}
        onChange={(newDate) => setFromDate(newDate)}
        maxDate={toDate}
      />
      <DesktopDatePicker
        label="To"
        sx={{ paddingRight: 1, width: 200 }}
        slotProps={{ textField: { size: "small" } }}
        value={toDate}
        onChange={(newDate) => setToDate(newDate)}
        minDate={fromDate}
      />
      <Box sx={{ width: 120, paddingRight: 1 }}>
        <FormControl fullWidth size="small">
          <InputLabel id="filter-by-label">Filter by</InputLabel>
          <Select
            labelId="filter-by-label"
            id="filter-by"
            value={filterBySelection}
            label="Sort by"
            onChange={handleFilterChange}
          >
            <MenuItem value={"Groceries"}>Groceries</MenuItem>
            <MenuItem value={"Entertainment"}>Entertainment</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ width: 120, paddingRight: 1 }}>
        <FormControl fullWidth size="small">
          <InputLabel id="spending-history-sort-by-label">Sort by</InputLabel>
          <Select
            labelId="spending-history-sort-by-label"
            id="spending-history-sort-by"
            value={sortBySelection}
            label="Sort by"
            onChange={handleSortChange}
          >
            <MenuItem value={"cost-high-to-low"}>
              Sort by cost (high to low)
            </MenuItem>
            <MenuItem value={"cost-low-to-high"}>
              Sort by cost (low to high)
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Button
        sx={{ height: "40px" }}
        variant="contained"
        onClick={handleSearchClick}
      >
        Search
      </Button>
      <Modal open={openAddExpenseModal} onClose={handleCloseAddExpenseModal}>
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
          <AddExpense />
          <Box
            sx={{ display: "flex", justifyContent: "center", paddingTop: 2 }}
          >
            <Button
              color="error"
              variant="contained"
              onClick={handleCloseAddExpenseModal}
            >
              Exit
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default SpendingHistoryOperations;
