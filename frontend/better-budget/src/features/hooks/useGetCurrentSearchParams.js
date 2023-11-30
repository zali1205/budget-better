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

  const fromDate = searchParams.get("from");

  const toDate = searchParams.get("to");

  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;

  return { filter, sortBy, fromDate, toDate, page };
}

export default useGetCurrentSearchParams;
