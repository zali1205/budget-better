import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { useState } from "react";

function SpendingHistoryOperations() {
  const [sortBySelection, setSortBySelection] = useState("");
  const [filterBySelection, setFilterBySelection] = useState("");
  const [fromDate, setFromDate] = useState(dayjs());
  const [toDate, setToDate] = useState(dayjs());

  function handleFilterChange(event) {
    setFilterBySelection(event.target.value);
  }

  function handleSortChange(event) {
    setSortBySelection(event.target.value);
  }

  function handleSearchClick() {
    console.log("Searching");
  }

  return (
    <>
      <DesktopDatePicker
        label="From"
        sx={{ paddingRight: 1, width: 200 }}
        value={fromDate}
        onChange={(newDate) => setFromDate(newDate)}
        maxDate={toDate}
      />
      <DesktopDatePicker
        label="To"
        sx={{ paddingRight: 1, width: 200 }}
        value={toDate}
        onChange={(newDate) => setToDate(newDate)}
        minDate={fromDate}
      />
      <Box sx={{ width: 120, paddingRight: 1 }}>
        <FormControl fullWidth>
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
        <FormControl fullWidth>
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
        sx={{ height: "56px" }}
        variant="contained"
        onClick={handleSearchClick}
      >
        Search
      </Button>
    </>
  );
}

export default SpendingHistoryOperations;
