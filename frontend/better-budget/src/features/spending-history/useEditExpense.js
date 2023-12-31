import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editExpense as editExpenseApi } from "../../services/apiExpense";
import useGetCurrentSearchParams from "../hooks/useGetCurrentSearchParams";

function useEditExpense() {
  const queryClient = useQueryClient();
  const { filter, sortBy, fromDate, toDate, page } =
    useGetCurrentSearchParams();

  const { mutate: editExpense, isPending } = useMutation({
    mutationFn: ({ oldExpenseData, newExpenseData }) => {
      return editExpenseApi(oldExpenseData, newExpenseData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["expenses", filter, sortBy, fromDate, toDate, page],
      });
      queryClient.invalidateQueries({ queryKey: ["stores"] });
      queryClient.invalidateQueries({ queryKey: ["payments"] });
      queryClient.invalidateQueries({ queryKey: ["totalCostMonthlyExpenses"] });
      queryClient.invalidateQueries({ queryKey: ["totalMonthlyExpenses"] });
      queryClient.invalidateQueries({ queryKey: ["lastThirtyDaysExpenses"] });
      queryClient.invalidateQueries({ queryKey: ["recentExpenses"] });
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return { editExpense, isPending };
}

export default useEditExpense;

// queryClient.setQueryData(
//   ["expenses", filter, sortBy, fromDate, toDate, page],
//   ({ data: oldData, count }) => {
//     const newData = oldData.map((expense) => {
//       if (expense.id === newExpense[0].id) {
//         console.log("updated");
//         return newExpense[0];
//       }
//       return expense;
//     });
//     console.log(newData);
//     return { data: newData, count };
//   }
// );
