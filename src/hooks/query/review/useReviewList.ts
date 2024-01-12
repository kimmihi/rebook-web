import type { PaginationParams } from "types/utility";
import { useQuery } from "react-query";

import { getReviewList } from "api/review";

const useReviewList = (params: PaginationParams) => {
  const { data, isLoading, isError } = useQuery(
    ["review", "list", params],
    () => getReviewList(params)
  );

  return { data, isLoading, isError };
};

export default useReviewList;
