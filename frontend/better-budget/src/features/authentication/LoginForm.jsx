import { Box, Button, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import useLogin from "../authentication/useLogin";

function LoginForm() {
  const { register, handleSubmit, formState } = useForm();
  const { login, isPending } = useLogin();

  function onSubmit(data) {
    login({ email: data.email, password: data.password });
  }

  function onError(error) {
    console.error(error);
    console.log(formState);
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
      <Typography variant="h4">Sign in</Typography>

      <Box component="form" onSubmit={handleSubmit(onSubmit, onError)}>
        <TextField
          id="email"
          label="Email Address"
          margin="normal"
          fullWidth
          {...register("email", {
            required: "This field is required.",
          })}
          disabled={isPending}
          error={formState.errors?.email !== undefined}
          helperText={formState.errors?.email?.message}
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          margin="normal"
          fullWidth
          {...register("password", {
            required: "This field is required.",
          })}
          disabled={isPending}
          error={formState.errors?.password !== undefined}
          helperText={formState.errors?.password?.message}
        />
        <Button
          variant="contained"
          type="submit"
          sx={{ mt: 3, mb: 2 }}
          fullWidth
          disabled={isPending}
        >
          {!isPending ? "SIGN IN" : "SIGNING IN..."}
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Link component={RouterLink} to="/forgot-password">
          Forgot your password?
        </Link>
        <Link component={RouterLink} to="/signup">
          Sign up
        </Link>
      </Box>
    </Box>
  );
}

export default LoginForm;
