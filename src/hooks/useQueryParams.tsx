import queryString from "query-string";
import { useLocation, useSearchParams } from "react-router-dom";

import { FiltersBlog } from "../types/Blog";

function useQueryParams() {
  const { search } = useLocation();
  const [_, setSearchParams] = useSearchParams();

  const { title_contains, _sort } = queryString.parse(search);

  const initStateFilters = {
    title_contains:
      title_contains && typeof title_contains !== "object"
        ? title_contains
        : "",
    _sort: _sort && typeof _sort !== "object" ? _sort : "",
  };

  const setQueryParams = (filters: FiltersBlog) => {
    setSearchParams(filters);
  };

  return { initStateFilters, setQueryParams };
}

export default useQueryParams;
