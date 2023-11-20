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
import EditIcon from "@mui/icons-material/Edit";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { NumericFormat } from "react-number-format";
import { useForm } from "react-hook-form";
import { useState } from "react";
import dayjs from "dayjs";
import useGetStores from "./useGetStores";
import useGetPayments from "./useGetPayments";
import { toTitleCase } from "../../utils/helper";

const mockExpenseType = ["Entertainment", "Grocery", "Automobile", "House"];

function EditExpense({ expense }) {
  const [purchaseDate, setPurchaseDate] = useState(dayjs(expense.date));
  const [paymentTypeValue, setPaymentTypeValue] = useState(
    toTitleCase(expense.payment_method_id.payment_type)
  );
  const [cost, setCost] = useState(expense.total_cost);
  const [reocurring, setReoccuring] = useState(expense.reoccuring);
  const { stores, isLoading: isLoadingStores } = useGetStores();
  const { payments, isLoading: isLoadingPayments } = useGetPayments();
  const { register, handleSubmit, reset } = useForm();

  function onSubmit(data) {
    console.log(data);
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

  if (isLoadingStores || isLoadingPayments) {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          padding: 10,
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  const paymentTypeOptions = [
    ...new Set(payments.map((payment) => toTitleCase(payment.payment_type))),
  ];
  const paymentTypeLastFourOptions =
    paymentTypeValue !== null && paymentTypeValue.toLowerCase() !== "cash"
      ? payments
          .filter(
            (payment) => payment.payment_type === paymentTypeValue.toLowerCase()
          )
          .map((payment) =>
            toTitleCase(payment.payment_last_four_digits.toString())
          )
      : [];

  return (
    <Box
      sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <Avatar
        sx={{
          color: "white",
          backgroundColor: "#1976d2",
        }}
      >
        <EditIcon fontSize="medium" />
      </Avatar>
      <Typography variant="h6" sx={{ paddingTop: 1 }}>
        Edit an expense
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
            defaultValue={toTitleCase(expense.store_id.store_name)}
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
            options={stores.map((store) => toTitleCase(store.store_name))}
          />
        </Box>
        <Box sx={{ display: "flex" }}>
          <Autocomplete
            freeSolo
            id="paymentType"
            onChange={(event, newValue) => setPaymentTypeValue(newValue)}
            onInputChange={(event, newValue) => setPaymentTypeValue(newValue)}
            value={paymentTypeValue}
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
            options={paymentTypeOptions}
          />

          <Autocomplete
            freeSolo
            id="paymentLastFour"
            disabled={
              paymentTypeValue !== null &&
              paymentTypeValue.toLowerCase() === "cash"
            }
            defaultValue={
              expense.payment_method_id.payment_last_four_digits !== null
                ? String(expense.payment_method_id.payment_last_four_digits)
                : ""
            }
            renderInput={(params) => (
              <TextField
                {...params}
                id="paymentLastFour"
                label="Last 4 Digits"
                margin="normal"
                required={
                  paymentTypeValue !== null &&
                  paymentTypeValue.toLowerCase() === "cash"
                }
                sx={{ width: "195px" }}
                {...register("paymentLastFour", {
                  required:
                    paymentTypeValue !== null &&
                    paymentTypeValue !== "cash" &&
                    "This field is required",
                })}
              />
            )}
            options={paymentTypeLastFourOptions}
          />
        </Box>
        <Box sx={{ display: "flex" }}>
          <Autocomplete
            freeSolo
            id="expenseType"
            options={mockExpenseType}
            defaultValue={expense.expense_type}
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
          defaultValue={expense.description}
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

export default EditExpense;
