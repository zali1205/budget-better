import { useQuery } from "@tanstack/react-query";
import { getExpenses } from "../../services/apiExpense";
import { useSearchParams } from "react-router-dom";

function useGetExpenses() {
  const [searchParams] = useSearchParams();

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
