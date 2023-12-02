import { useQuery } from "@tanstack/react-query";
import { getTotalCostMonthlyExpenses } from "../../services/apiExpense";

function useGetTotalCostMonthlyExpenses(date) {
  const {
    data: totalCostMonthlyExpenses,
    isLoading,
    isFetching,
  } = useQuery({
    queryFn: () => getTotalCostMonthlyExpenses(date),
    queryKey: ["totalCostMonthlyExpenses"],
  });

  return { totalCostMonthlyExpenses, isLoading, isFetching };
}

export default useGetTotalCostMonthlyExpenses;
