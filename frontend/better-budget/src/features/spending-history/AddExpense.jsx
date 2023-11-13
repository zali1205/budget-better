import {
  Autocomplete,
  Avatar,
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import dayjs from "dayjs";
import { useForm } from "react-hook-form";
import { NumericFormat } from "react-number-format";
import useCreateExpense from "./useCreateExpense";
import useGetStores from "./useGetStores";

const mockStores = ["Walmart", "Target", "Microcenter"];
const mockExpenseType = ["Entertainment", "Grocery", "Automobile", "House"];
const mockPaymentMethods = ["Cash", "Check", "Visa", "Mastercard", "Amex"];

function AddExpense() {
  const [purchaseDate, setPurchaseDate] = useState(dayjs());
  const [cost, setCost] = useState();
  const [reocurring, setReoccuring] = useState(false);
  const { register, handleSubmit, getValues, reset } = useForm();
  const { createExpense, isPending } = useCreateExpense();
  const { stores, isLoading } = useGetStores();

  function onSubmit(data) {
    createExpense({
      date: purchaseDate.toISOString(),
      store: data.store,
      paymentType: data.paymentType,
      paymentLastFour: data.paymentLastFour,
      reoccuring: false,
      description: data.description,
      expenseType: data.expenseType,
      cost: cost.toFixed(2),
    });
    // reset();
  }

  function onError(error) {
    console.log(error);
  }

  function handleCostChange(event) {
    setCost(parseFloat(event.value));
  }

  function handleReocurringChange() {
    setReoccuring((currentState) => !currentState);
  }

  if (isPending) {
    return <CircularProgress />;
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
        <Box sx={{ display: "flex" }}>
          <Autocomplete
            freeSolo
            id="paymentType"
            renderInput={(params) => (
              <TextField
                {...params}
                id="paymentType"
                label="Payment Method"
                margin="normal"
                required
                sx={{ width: "195px", marginRight: 1 }}
                {...register("paymentType", {
                  required: "This field is required",
                })}
              />
            )}
            options={mockPaymentMethods}
          />

          <TextField
            id="paymentLastFour"
            label="Last 4 Digits"
            margin="normal"
            required
            {...register("paymentLastFour", {
              required: "This field is required.",
            })}
            disabled={getValues()?.paymentMethod === "Cash"}
          />
        </Box>
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
          <FormControlLabel
            control={<Checkbox />}
            label="Reoccuring?"
            checked={reocurring}
            onChange={handleReocurringChange}
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
