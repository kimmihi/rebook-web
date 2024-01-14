import { useInfiniteQuery, useQuery } from "react-query";

import { getReviewList } from "api/review";

const useInfiniteReviewList = (size: number) => {
  const { data, isLoading, isError, hasNextPage, fetchNextPage } =
    useInfiniteQuery(
      ["reviews"],
      ({ pageParam = 1 }) => {
        return getReviewList({ page: pageParam, size });
      },
      {
        getNextPageParam: (lastPage) => {
          const { page, totalPages } = lastPage;
          const nextPage = page < totalPages ? page + 1 : undefined;
          return nextPage;
        },
        select: (data) => ({
          pages: data?.pages.flatMap(({ list }) => list),
          pageParams: data.pageParams,
        }),
      }
    );

  return { data, isLoading, isError, hasNextPage, fetchNextPage };
};

export default useInfiniteReviewList;
