import { useQuery } from "@tanstack/react-query";
import { getLastThirtyDayExpenses } from "../../services/apiExpense";

function useGetLastThirtyDayExpenses() {
  const {
    data: lastThirtyDayExpenses,
    isLoading,
    isPending,
  } = useQuery({
    queryFn: getLastThirtyDayExpenses,
    queryKey: ["lastThirtyDayExpenses"],
  });

  return { lastThirtyDayExpenses, isLoading, isPending };
}

export default useGetLastThirtyDayExpenses;
