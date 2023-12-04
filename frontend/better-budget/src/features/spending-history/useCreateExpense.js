import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createExpense as apiCreateExpense } from "../../services/apiExpense";

function useCreateExpense() {
  const queryClient = useQueryClient();

  const { mutate: createExpense, isPending } = useMutation({
    mutationFn: (expense) => apiCreateExpense(expense),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["expenses"] });
      queryClient.invalidateQueries({ queryKey: ["stores"] });
      queryClient.invalidateQueries({ queryKey: ["payments"] });
      queryClient.invalidateQueries({ queryKey: ["totalCostMonthlyExpenses"] });
      queryClient.invalidateQueries({ queryKey: ["totalMonthlyExpenses"] });
      queryClient.invalidateQueries({ queryKey: ["lastThirtyDayExpenses"] });
    },
  });

  return { createExpense, isPending };
}

export default useCreateExpense;
