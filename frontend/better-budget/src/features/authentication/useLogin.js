import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../../services/apiAuthentication";

function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      navigate("/dashboard", { replace: true });
    },
    onError: (error) => {
      console.log(`ERROR: ${error}`);
    },
  });

  return { login, isPending };
}

export default useLogin;
