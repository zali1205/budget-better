import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteExpense as deleteExpenseApi } from "../../services/apiExpense";

function useDeleteExpense() {
  const queryClient = useQueryClient();
  const { mutate: deleteExpense, isPending } = useMutation({
    mutationFn: (expenseId) => deleteExpenseApi(expenseId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["expenses"] });
      queryClient.invalidateQueries({ queryKey: ["totalCostMonthlyExpenses"] });
      queryClient.invalidateQueries({ queryKey: ["totalMonthlyExpenses"] });
      queryClient.invalidateQueries({ queryKey: ["lastThirtyDaysExpenses"] });
      queryClient.invalidateQueries({ queryKey: ["recentExpenses"] });
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return { deleteExpense, isPending };
}

export default useDeleteExpense;
