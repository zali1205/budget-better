import {
  Autocomplete,
  Avatar,
  Box,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import dayjs from "dayjs";
import { useForm } from "react-hook-form";
import { NumericFormat } from "react-number-format";

const mockStores = ["Walmart", "Target", "Microcenter"];
const mockExpenseType = ["Entertainment", "Grocery", "Automobile", "House"];

function AddExpense() {
  const [purchaseDate, setPurchaseDate] = useState(dayjs());
  const [cost, setCost] = useState();
  const { register, handleSubmit, formState, reset } = useForm();

  function onSubmit(data) {
    console.log(cost.toFixed(2));
    console.log(data);
  }

  function onError(error) {
    console.log(error);
  }

  function handleCostChange(event) {
    console.log(event);
    setCost(parseFloat(event.value));
  }

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
        onSubmit={handleSubmit(onSubmit, onError)}
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
                {...register("store", {
                  required: "This field is required.",
                })}
              />
            )}
            options={mockStores}
          />
        </Box>
        <Box>
          <TextField
            id="paymentMethod"
            label="Payment Method"
            margin="normal"
            required
            sx={{ marginRight: 1 }}
            {...register("paymentMethod", {
              required: "This field is required.",
            })}
          />
          <TextField
            id="paymentMethoDigits"
            label="Last 4 Digits"
            margin="normal"
            required
            {...register("lastFourDigits", {
              required: "This field is required.",
            })}
          />
        </Box>
        <TextField
          id="description"
          label="Quick Description"
          margin="normal"
          sx={{ width: "398px" }}
          {...register("description", {
            maxLength: 100,
          })}
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
                {...register("expenseType", {
                  required: "This field is required.",
                })}
              />
            )}
          />

          <NumericFormat
            customInput={TextField}
            onValueChange={handleCostChange}
            value={cost}
            id="cost"
            label="Cost"
            margin="normal"
            required
            sx={{ width: "195px" }}
            prefix="$"
          />
        </Box>
        <Button variant="contained" type="submit" sx={{ marginTop: 2 }}>
          Add Expense
        </Button>
      </Box>
    </Box>
  );
}

export default AddExpense;
