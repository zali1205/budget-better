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
import { useSearchParams } from "react-router-dom";
import useGetCurrentSearchParams from "../hooks/useGetCurrentSearchParams";

function SpendingHistoryOperations() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [openAddExpenseModal, setOpenAddExpenseModal] = useState(false);
  const { filter, sortBy, fromDate, toDate } = useGetCurrentSearchParams();
  const [fromDateSelection, setFromDateSelection] = useState(
    fromDate !== null ? dayjs(fromDate) : null
  );
  const [toDateSelection, setToDateSelection] = useState(
    toDate !== null ? dayjs(toDate) : null
  );
  const [filterBySelection, setFilterBySelection] = useState(
    filter !== null ? filter.value : ""
  );
  const [sortBySelection, setSortBySelection] = useState(
    sortBy !== null ? sortBy.originalValue : ""
  );

  function handleFilterChange(event) {
    setFilterBySelection(event.target.value);
  }

  function handleSortChange(event) {
    setSortBySelection(event.target.value);
  }

  function handleSearchClick() {
    console.log("Searching");
    if (filterBySelection === "" || filterBySelection === "none") {
      searchParams.delete("filterBy");
    } else if (filterBySelection !== "") {
      searchParams.set("filterBy", filterBySelection);
    }

    if (sortBySelection === "" || sortBySelection === "none") {
      searchParams.delete("sortBy");
    } else if (sortBySelection !== "") {
      searchParams.set("sortBy", sortBySelection);
    }

    if (fromDateSelection === null) {
      searchParams.delete("from");
    } else if (fromDateSelection) {
      searchParams.set("from", fromDateSelection?.format("YYYY-MM-DD"));
    }

    if (toDateSelection === null) {
      searchParams.delete("to");
    } else if (toDateSelection) {
      searchParams.set("to", toDateSelection?.format("YYYY-MM-DD"));
    }
    searchParams.delete("page");
    setSearchParams(searchParams);
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
        slotProps={{
          textField: { size: "small" },
          actionBar: { actions: ["clear"] },
        }}
        sx={{ paddingRight: 1, width: 200 }}
        value={fromDateSelection}
        onChange={(newDate) => setFromDateSelection(newDate)}
        maxDate={toDateSelection}
      />
      <DesktopDatePicker
        label="To"
        sx={{ paddingRight: 1, width: 200 }}
        slotProps={{
          textField: { size: "small" },
          actionBar: { actions: ["clear"] },
        }}
        value={toDateSelection}
        onChange={(newDate) => setToDateSelection(newDate)}
        minDate={fromDateSelection}
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
            <MenuItem value={"none"}>
              <i>None</i>
            </MenuItem>
            <MenuItem value={"grocery"}>Groceries</MenuItem>
            <MenuItem value={"entertainment"}>Entertainment</MenuItem>
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
            <MenuItem value={"none"}>
              <i>None</i>
            </MenuItem>
            <MenuItem value={"total_cost-high-to-low"}>
              Sort by cost (high to low)
            </MenuItem>
            <MenuItem value={"total_cost-low-to-high"}>
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
            top: "20%",
            left: "40%",
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            width: "500px",
            p: 4,
          }}
        >
          <AddExpense closeModal={handleCloseAddExpenseModal} />
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
