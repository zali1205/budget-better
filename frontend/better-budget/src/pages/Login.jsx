import { Container } from "@mui/material";
import LoginForm from "../features/authentication/LoginForm";

function Login() {
  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <LoginForm />
    </Container>
  );
}

export default Login;
