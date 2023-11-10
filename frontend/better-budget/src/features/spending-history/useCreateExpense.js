import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createExpense as apiCreateExpense } from "../../services/apiExpense";

function useCreateExpense() {
  const queryClient = useQueryClient();

  const { mutate: createExpense, isPending } = useMutation({
    mutationFn: (expense) => apiCreateExpense(expense),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["expenses"] });
    },
  });

  return { createExpense, isPending };
}

export default useCreateExpense;
