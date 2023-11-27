import { useQuery } from "@tanstack/react-query";
import { getExpenses } from "../../services/apiExpense";
import useGetCurrentSearchParams from "../hooks/useGetCurrentSearchParams";

function useGetExpenses() {
  const { filter, sortBy } = useGetCurrentSearchParams();

  const {
    data: expenses,
    isLoading,
    isFetching,
  } = useQuery({
    queryFn: () => getExpenses(filter, sortBy),
    queryKey: ["expenses", filter, sortBy],
  });

  return { expenses, isLoading, isFetching };
}

export default useGetExpenses;
