import { useQuery } from "@tanstack/react-query";
import { getTotalMonthlyExpenses } from "../../services/apiExpense";

function useGetTotalExpenses(date) {
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

export default useGetTotalExpenses;
