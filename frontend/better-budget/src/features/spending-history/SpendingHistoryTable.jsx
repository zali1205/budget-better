import {
  Box,
  CircularProgress,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import SpendingHistoryTableItem from "./SpendingHistoryTableItem";
import useGetExpenses from "./useGetExpenses";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import useGetCurrentSearchParams from "../hooks/useGetCurrentSearchParams";
import { SIZE_PER_PAGE } from "../../utils/constants";

function SpendingHistoryTable() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { expenses, count, isLoading, isFetching } = useGetExpenses();
  const { page: currentPage } = useGetCurrentSearchParams();
  const [page, setPage] = useState(currentPage);

  const pageCount = Math.ceil(count / SIZE_PER_PAGE);

  function handlePageChange(event, value) {
    searchParams.set("page", value);
    setSearchParams(searchParams);
    setPage(value);
  }

  if (isFetching || isLoading) {
    return (
      <Box sx={{ display: "flex", alignItems: "center", height: "75vh" }}>
        <CircularProgress size={65} />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: { xs: "75%", md: "100%" },
      }}
    >
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Store</TableCell>
              <TableCell>Expense Type</TableCell>
              <TableCell>Payment Method</TableCell>
              <TableCell>Reoccuring</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Total Cost</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {expenses.map((expense) => (
              <SpendingHistoryTableItem expense={expense} key={expense.id} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        sx={{ paddingY: 2 }}
        size="large"
        count={pageCount}
        page={page}
        onChange={handlePageChange}
      />
    </Box>
  );
}

export default SpendingHistoryTable;
