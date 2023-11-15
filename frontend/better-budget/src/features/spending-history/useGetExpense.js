import { useQuery } from "@tanstack/react-query";
import { getExpenses } from "../../services/apiExpense";

function useGetExpenses() {
  const {
    data: expenses,
    isLoading,
    isFetching,
  } = useQuery({
    queryFn: getExpenses,
    queryKey: ["expenses"],
  });

  return { expenses, isLoading, isFetching };
}

export default useGetExpenses;
