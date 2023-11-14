import { Box, CircularProgress } from "@mui/material";
import useUser from "../features/authentication/useUser";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { user, isLoading, isAuthenticated } = useUser();

  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) {
        navigate("/login");
      }
    },
    [isAuthenticated, isLoading, navigate]
  );

  if (isLoading) {
    return (
      <Box
        sx={{
          position: "absolute",
          top: "40%",
          left: "50%",
        }}
      >
        <CircularProgress size={70} />
      </Box>
    );
  }

  if (isAuthenticated) {
    return children;
  }
}

export default ProtectedRoute;
