import { useQuery } from "@tanstack/react-query";
import { getPayments } from "../../services/apiPayment";

function useGetPayments() {
  const { data: payments, isLoading } = useQuery({
    queryFn: getPayments,
    queryKey: ["payments"],
  });

  return { payments, isLoading };
}

export default useGetPayments;
