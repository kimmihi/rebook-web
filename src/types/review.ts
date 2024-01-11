export interface PostReviewDTO extends PostReviewFormFieldValues {
  bookId: number;
}

export interface PostReviewFormFieldValues {
  title: string;
  content: string;
}
