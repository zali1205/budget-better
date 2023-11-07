import {
  Autocomplete,
  Avatar,
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import { useState } from "react";
import dayjs from "dayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers";

const mockStores = ["Walmart", "Target", "Microcenter"];
const mockExpenseType = ["Entertainment", "Grocery", "Automobile", "House"];

function AddExpense() {
  const [purchaseDate, setPurchaseDate] = useState(dayjs());
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Avatar
        sx={{
          color: "white",
          backgroundColor: "#1976d2",
        }}
      >
        <PointOfSaleIcon fontSize="medium" />
      </Avatar>
      <Typography variant="h6" sx={{ paddingTop: 1 }}>
        Add an expense
      </Typography>
      <Box
        component="form"
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Box>
            <DesktopDatePicker
              label="From"
              slotProps={{
                textField: { sx: { marginTop: 2, marginRight: 1, width: 195 } },
              }}
              value={purchaseDate}
              onChange={(newDate) => setPurchaseDate(newDate)}
            />
          </Box>
          <Autocomplete
            freeSolo
            id="store"
            label="Store"
            renderInput={(params) => (
              <TextField
                {...params}
                id="store"
                label="Store"
                margin="normal"
                required
                sx={{ width: "195px" }}
              />
            )}
            options={mockStores}
            //   {...register("firstName", {
            //     required: "This field is required.",
            //   })}
            //   disabled={isPending}
            //   error={formState?.errors?.firstName !== undefined}
            //   helperText={formState?.errors?.firstName?.message}
          />
        </Box>
        <Box>
          <TextField
            id="paymentMethod"
            label="Payment Method"
            margin="normal"
            required
            sx={{ marginRight: 1 }}
            //   {...register("firstName", {
            //     required: "This field is required.",
            //   })}
            //   disabled={isPending}
            //   error={formState?.errors?.firstName !== undefined}
            //   helperText={formState?.errors?.firstName?.message}
          />
          <TextField
            id="paymentMethoDigits"
            label="Last 4 Digits"
            margin="normal"
            required
            //   {...register("firstName", {
            //     required: "This field is required.",
            //   })}
            //   disabled={isPending}
            //   error={formState?.errors?.firstName !== undefined}
            //   helperText={formState?.errors?.firstName?.message}
          />
        </Box>
        <TextField
          id="description"
          label="Quick Description"
          margin="normal"
          sx={{ width: "398px" }}
          //   {...register("firstName", {
          //     required: "This field is required.",
          //   })}
          //   disabled={isPending}
          //   error={formState?.errors?.firstName !== undefined}
          //   helperText={formState?.errors?.firstName?.message}
        />
        <Box sx={{ display: "flex" }}>
          <Autocomplete
            freeSolo
            id="expenseType"
            options={mockExpenseType}
            renderInput={(params) => (
              <TextField
                {...params}
                id="expenseType"
                label="Expense Type"
                margin="normal"
                required
                sx={{ width: "195px", marginRight: 1 }}
                //   {...register("firstName", {
                //     required: "This field is required.",
                //   })}
                //   disabled={isPending}
                //   error={formState?.errors?.firstName !== undefined}
                //   helperText={formState?.errors?.firstName?.message}
              />
            )}
          />

          <TextField
            id="cost"
            label="Cost"
            margin="normal"
            required
            sx={{ width: "195px" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
            //   {...register("firstName", {
            //     required: "This field is required.",
            //   })}
            //   disabled={isPending}
            //   error={formState?.errors?.firstName !== undefined}
            //   helperText={formState?.errors?.firstName?.message}
          />
        </Box>
        <Button variant="contained">Add Expense</Button>
      </Box>
    </Box>
  );
}

export default AddExpense;
