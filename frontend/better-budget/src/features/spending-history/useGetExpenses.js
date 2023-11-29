import { useQuery } from "@tanstack/react-query";
import { getExpenses } from "../../services/apiExpense";
import useGetCurrentSearchParams from "../hooks/useGetCurrentSearchParams";

function useGetExpenses() {
  const { filter, sortBy, fromDate, toDate } = useGetCurrentSearchParams();

  const {
    data: expenses,
    isLoading,
    isFetching,
  } = useQuery({
    queryFn: () => getExpenses(filter, sortBy, fromDate, toDate),
    queryKey: ["expenses", filter, sortBy, fromDate, toDate],
  });

  return { expenses, isLoading, isFetching };
}

export default useGetExpenses;
