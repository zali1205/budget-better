import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import useLogin from "../authentication/useLogin";
import Copyright from "../../ui/Copyright";

function LoginForm() {
  const { register, handleSubmit, formState } = useForm();
  const { login, isPending } = useLogin();

  function onSubmit(data) {
    login({ email: data.email, password: data.password });
  }

  function onError(error) {
    console.error(error);
  }

  if (isPending) {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: "100%",
        }}
      >
        <CircularProgress size={60} />
      </Box>
    );
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
      <Avatar
        sx={{
          color: "white",
          backgroundColor: "#1976d2",
        }}
      >
        <LockIcon fontSize="medium" />
      </Avatar>
      <Typography variant="h5" sx={{ paddingTop: 1 }}>
        Sign in
      </Typography>

      <Box component="form" onSubmit={handleSubmit(onSubmit, onError)}>
        <TextField
          id="email"
          label="Email Address"
          margin="normal"
          fullWidth
          required
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
          required
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
          Forgot password?
        </Link>
        <Link component={RouterLink} to="/signup">
          Don&apos;t have an account? Sign up
        </Link>
      </Box>
      <Copyright />
    </Box>
  );
}

export default LoginForm;
