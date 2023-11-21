import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editExpense as editExpenseApi } from "../../services/apiExpense";

function useEditExpense() {
  const queryClient = useQueryClient();

  const { mutate: editExpense, isPending } = useMutation({
    mutationFn: ({ oldExpenseData, newExpenseData }) => {
      return editExpenseApi(oldExpenseData, newExpenseData);
    },
    onSuccess: (newExpense) => {
      queryClient.setQueryData(["expenses"], (oldData) =>
        oldData.map((expense) => {
          if (expense.id === newExpense[0].id) {
            console.log("updated");
            return newExpense[0];
          }
          return expense;
        })
      );
      queryClient.invalidateQueries({ queryKey: ["stores"] });
      queryClient.invalidateQueries({ queryKey: ["payments"] });
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return { editExpense, isPending };
}

export default useEditExpense;
