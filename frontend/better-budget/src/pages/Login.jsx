import { Container } from "@mui/material";
import Copyright from "../ui/Copyright";
import LoginForm from "../features/authentication/LoginForm";

function Login() {
  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <LoginForm />
      <Copyright />
    </Container>
  );
}

export default Login;
