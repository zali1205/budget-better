import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { useState } from "react";

function SpendingHistoryOperations() {
  const [sortBySelection, setSortBySelection] = useState("");
  const [filterBySelection, setFilterBySelection] = useState("");

  return (
    <>
      <DesktopDatePicker label="From" sx={{ paddingRight: 1 }} />
      <DesktopDatePicker label="To" sx={{ paddingRight: 1 }} />
      <Box sx={{ minWidth: 120, paddingRight: 1 }}>
        <FormControl fullWidth>
          <InputLabel id="filter-by-label">Filter by</InputLabel>
          <Select
            labelId="filter-by-label"
            id="filter-by"
            value={filterBySelection}
            label="Sort by"
          >
            <MenuItem>Groceries</MenuItem>
            <MenuItem>Entertainment</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="spending-history-sort-by-label">Sort by</InputLabel>
          <Select
            labelId="spending-history-sort-by-label"
            id="spending-history-sort-by"
            value={sortBySelection}
            label="Sort by"
          >
            <MenuItem>Sort by cost (high to low)</MenuItem>
            <MenuItem>Sort by cost (low to high)</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
}

export default SpendingHistoryOperations;
