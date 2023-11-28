import { useSearchParams } from "react-router-dom";

function useGetCurrentSearchParams() {
  const [searchParams] = useSearchParams();

  // FILTER
  const filter =
    searchParams.get("filterBy") !== null
      ? { field: "expense_type", value: searchParams.get("filterBy") }
      : null;

  // SORT-BY
  const sortByRaw = searchParams.get("sortBy");
  let field = "";
  let direction = "";
  let fromDirection = "";

  if (sortByRaw !== null) {
    [field, fromDirection] = sortByRaw.split("-");
    if (fromDirection === "high") {
      direction = "desc";
    } else {
      direction = "asc";
    }
  }

  const sortBy =
    sortByRaw !== null
      ? { field, direction, originalValue: searchParams.get("sortBy") }
      : null;

  return { filter, sortBy };
}

export default useGetCurrentSearchParams;
