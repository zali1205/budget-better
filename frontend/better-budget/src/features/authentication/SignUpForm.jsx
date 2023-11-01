import { Box, Button, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Copyright from "../../ui/Copyright";
import { useForm } from "react-hook-form";
import useSignUp from "./useSignup";

function SignUpForm() {
  const { register, handleSubmit, reset, formState, getValues } = useForm();
  const { signUp, isPending } = useSignUp();

  function onSubmit(data) {
    console.log(data);
    signUp({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
    });
    reset();
  }

  function onError(error) {
    console.error(error);
  }

  return (
    <Box
      sx={{
        marginTop: 10,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h4">Sign Up</Typography>
      <Box component="form" onSubmit={handleSubmit(onSubmit, onError)}>
        <TextField
          id="firstName"
          label="First Name"
          margin="normal"
          required
          sx={{ marginRight: 1 }}
          {...register("firstName", {
            required: "This field is required.",
          })}
          disabled={isPending}
          error={formState?.errors?.firstName !== undefined}
          helperText={formState?.errors?.firstName?.message}
        />
        <TextField
          id="lastName"
          label="Last Name"
          margin="normal"
          required
          {...register("lastName", {
            required: "This field is required.",
          })}
          disabled={isPending}
          error={formState?.errors?.lastName !== undefined}
          helperText={formState?.errors?.lastName?.message}
        />
        <TextField
          id="email"
          label="Email Address"
          type="email"
          margin="normal"
          fullWidth
          required
          {...register("email", {
            required: "This field is required.",
          })}
          disabled={isPending}
          error={formState?.errors?.email !== undefined}
          helperText={formState?.errors?.email?.message}
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          margin="normal"
          fullWidth
          required
          {...register("password", {
            required: "This field is required.",
            minLength: 6,
          })}
          disabled={isPending}
          error={
            formState?.errors?.password !== undefined ||
            formState?.errors?.confirmPassword !== undefined
          }
          helperText={
            formState?.errors?.password?.message ||
            formState?.errors?.confirmPassword?.message
          }
        />
        <TextField
          id="confirm-password"
          label="Confirm Password"
          type="password"
          margin="normal"
          fullWidth
          required
          {...register("confirmPassword", {
            required: "This field is required.",
            minLength: 6,
            validate: (value) =>
              value === getValues().password || "Passwords need to match",
          })}
          disabled={isPending}
          error={formState?.errors?.confirmPassword !== undefined}
          helperText={formState?.errors?.confirmPassword?.message}
        />
        <Button
          variant="contained"
          type="submit"
          fullWidth
          sx={{ marginTop: 3 }}
          disabled={isPending}
        >
          SIGN UP
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "right",
          width: "100%",
          marginTop: 1.5,
        }}
      >
        <Link component={RouterLink} to="/login">
          Already have an account? Sign in!
        </Link>
      </Box>
      <Copyright />
    </Box>
  );
}

export default SignUpForm;
