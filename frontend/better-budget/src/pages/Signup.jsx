import { Container } from "@mui/material";
import SignUpForm from "../features/authentication/SignUpForm";

function Signup() {
  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 5,
        height: { sm: "100vh" },
      }}
    >
      <SignUpForm />
    </Container>
  );
}

export default Signup;
