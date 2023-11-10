import { useQuery } from "@tanstack/react-query";
import { getExpenses } from "../../services/apiExpense";

function useGetExpenses() {
  const { data: expenses, isLoading } = useQuery({
    queryFn: getExpenses,
    queryKey: ["expenses"],
  });

  return { expenses, isLoading };
}

export default useGetExpenses;
