import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import useDeleteExpense from "./useDeleteExpense";

function DeleteExpense({ expense }) {
  const { deleteExpense, isPending } = useDeleteExpense();

  function handleDeleteButton() {
    deleteExpense(expense.id);
  }

  return (
    <Box
      sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <Box
        sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
      >
        <Avatar
          sx={{
            color: "primary.contrastText",
            backgroundColor: "primary.main",
          }}
        >
          <DeleteIcon />
        </Avatar>
        <Typography variant="h6" sx={{ paddingTop: 1 }}>
          Delete an expense
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          paddingTop: 2,
        }}
      >
        {!isPending ? (
          <>
            <Typography>
              Are you sure you want to delete the following expense?
            </Typography>
            <Button
              variant="contained"
              disabled={isPending}
              onClick={handleDeleteButton}
              sx={{ marginTop: 2 }}
            >
              Delete expense
            </Button>
          </>
        ) : (
          <CircularProgress />
        )}
      </Box>
    </Box>
  );
}

export default DeleteExpense;
