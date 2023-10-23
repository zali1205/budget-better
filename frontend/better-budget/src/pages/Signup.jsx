import {
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { Link as RouterLink } from "react-router-dom";
import Copyright from "../ui/Copyright";

function Signup() {
  const { register, handleSubmit, reset, formState } = useForm();

  function onSubmit(data) {
    console.log(data);
    reset();
  }

  function onError(error) {
    console.error(error);
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 10,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h4">Sign up</Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit, onError)}>
          <TextField
            id="firstName"
            label="First Name"
            margin="normal"
            sx={{ marginRight: 1 }}
            {...register("firstName", {
              required: "This field is required.",
            })}
            error={formState?.errors?.firstName !== undefined}
            helperText={formState?.errors?.firstName?.message}
          />
          <TextField
            id="lastName"
            label="Last Name"
            margin="normal"
            {...register("lastName", {
              required: "This field is required.",
            })}
            error={formState?.errors?.lastName !== undefined}
            helperText={formState?.errors?.lastName?.message}
          />
          <TextField
            id="email"
            label="Email Address"
            fullWidth
            margin="normal"
            {...register("email", {
              required: "This field is required.",
            })}
            error={formState?.errors?.email !== undefined}
            helperText={formState?.errors?.email?.message}
          />
          <TextField
            id="password"
            label="Password"
            fullWidth
            margin="normal"
            {...register("password", {
              required: "This field is required.",
            })}
            error={formState?.errors?.password !== undefined}
            helperText={formState?.errors?.password?.message}
          />
          <Button
            variant="contained"
            type="submit"
            fullWidth
            sx={{ marginTop: 3 }}
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
    </Container>
  );
}

export default Signup;
