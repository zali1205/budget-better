import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { signout as signoutApi } from "../../services/apiAuthentication";

function useSignout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isPending, mutate: signout } = useMutation({
    mutationFn: signoutApi,
    mutationKey: ["user"],
    onSuccess: () => {
      queryClient.clear();
      navigate("/login", { replace: true });
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return { isPending, signout };
}

export default useSignout;
