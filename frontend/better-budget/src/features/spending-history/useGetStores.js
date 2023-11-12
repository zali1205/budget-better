import { useQuery } from "@tanstack/react-query";
import { getStores } from "../../services/apiStore";

function useGetStores() {
  const { data: stores, isLoading } = useQuery({
    queryFn: getStores,
    queryKey: ["stores"],
  });

  return { stores, isLoading };
}

export default useGetStores;
