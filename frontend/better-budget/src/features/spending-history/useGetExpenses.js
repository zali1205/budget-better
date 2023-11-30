import { useQuery } from "@tanstack/react-query";
import { getExpenses } from "../../services/apiExpense";
import useGetCurrentSearchParams from "../hooks/useGetCurrentSearchParams";

function useGetExpenses() {
  const { filter, sortBy, fromDate, toDate, page } =
    useGetCurrentSearchParams();

  const {
    data: { data: expenses, count } = {},
    isLoading,
    isFetching,
  } = useQuery({
    queryFn: () => getExpenses(filter, sortBy, fromDate, toDate, page),
    queryKey: ["expenses", filter, sortBy, fromDate, toDate, page],
  });

  return { expenses, count, isLoading, isFetching };
}

export default useGetExpenses;
