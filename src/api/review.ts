import type { PostReviewDTO, Review } from "types/review";
import type { PaginationParams, PaginatedResponse } from "types/utility";

import request from "./request";

export const getReviewList = async (
  params: PaginationParams
): Promise<PaginatedResponse<Review>> => {
  const response = await request({
    method: "get",
    url: "/reviews",
    params,
  });

  return response?.data;
};

export const postReview = async (postReviewDTO: PostReviewDTO) => {
  const response = await request({
    method: "post",
    url: "/reviews",
    body: postReviewDTO,
  });

  return response;
};
