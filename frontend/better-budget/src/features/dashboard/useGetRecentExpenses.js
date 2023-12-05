import { useQuery } from "@tanstack/react-query";
import { getRecentExpenses } from "../../services/apiExpense";

function useGetRecentExpenses(upTo) {
  const {
    data: recentExpenses,
    isLoading,
    isPending,
  } = useQuery({
    queryFn: () => getRecentExpenses(upTo),
    queryKey: ["recentExpenses"],
  });

  return { recentExpenses, isLoading, isPending };
}

export default useGetRecentExpenses;
