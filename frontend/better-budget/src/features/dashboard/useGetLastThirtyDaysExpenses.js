import { useQuery } from "@tanstack/react-query";
import { getLastThirtyDaysExpenses } from "../../services/apiExpense";

function useGetLastThirtyDaysExpenses() {
  const {
    data: lastThirtyDayExpenses,
    isLoading,
    isPending,
  } = useQuery({
    queryFn: getLastThirtyDaysExpenses,
    queryKey: ["lastThirtyDaysExpenses"],
  });

  return { lastThirtyDayExpenses, isLoading, isPending };
}

export default useGetLastThirtyDaysExpenses;
