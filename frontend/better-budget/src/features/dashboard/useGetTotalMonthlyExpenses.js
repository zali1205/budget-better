import { useQuery } from "@tanstack/react-query";
import { getTotalMonthlyExpenses } from "../../services/apiExpense";

function useGetTotalMonthlyExpenses(date) {
  const {
    data: totalMonthlyExpenses,
    isLoading,
    isFetching,
  } = useQuery({
    queryFn: () => getTotalMonthlyExpenses(date),
    queryKey: ["totalExpenses"],
  });

  return { totalMonthlyExpenses, isLoading, isFetching };
}

export default useGetTotalMonthlyExpenses;
