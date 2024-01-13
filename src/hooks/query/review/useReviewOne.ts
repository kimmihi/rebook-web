import { useQuery } from "react-query";

import { getReviewOne } from "api/review";

const useReviewOne = (reviewId: number) => {
  const { data, isLoading, isError } = useQuery(["reviews", reviewId], () =>
    getReviewOne(reviewId)
  );

  return { data, isLoading, isError };
};

export default useReviewOne;
