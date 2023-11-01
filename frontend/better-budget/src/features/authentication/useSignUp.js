import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { signUp as signUpApi } from "../../services/apiAuthentication";

function useSignUp() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: signUp, isPending } = useMutation({
    mutationFn: ({ firstName, lastName, email, password }) =>
      signUpApi({ firstName, lastName, email, password }),
    onSuccess: (user) => {
      console.log(user);
      queryClient.setQueryData(["user"], user.user);
      navigate("/dashboard", { replace: true });
    },
    onError: (error) => console.error(error.message),
  });

  return { signUp, isPending };
}

export default useSignUp;
