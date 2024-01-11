import type { PostReviewDTO } from "types/review";

import request from "./request";

export const postReview = async (postReviewDTO: PostReviewDTO) => {
  const response = await request({
    method: "post",
    url: "/reviews",
    body: postReviewDTO,
  });

  return response;
};
