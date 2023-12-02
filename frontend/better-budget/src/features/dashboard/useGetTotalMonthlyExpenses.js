import { useQuery } from "@tanstack/react-query";
import { getTotalMonthlyExpenses } from "../../services/apiExpense";

function useGetTotalMonthlyExpenses(date) {
  const {
    data: monthlyExpenses,
    isLoading,
    isPending,
  } = useQuery({
    queryFn: () => getTotalMonthlyExpenses(date),
    queryKey: ["totalMonthlyExpenses"],
  });

  return { monthlyExpenses, isLoading, isPending };
}

export default useGetTotalMonthlyExpenses;
