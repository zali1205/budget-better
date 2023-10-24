import { CircularProgress } from "@mui/material";
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
    return <CircularProgress />;
  }

  if (isAuthenticated) {
    return children;
  }
}

export default ProtectedRoute;
