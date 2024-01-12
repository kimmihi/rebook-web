import type { Book } from "./book";
export interface PostReviewDTO extends PostReviewFormFieldValues {
  bookId: number;
}

export interface PostReviewFormFieldValues {
  title: string;
  content: string;
}

export type BookInReview = Pick<
  Book,
  | "id"
  | "title"
  | "author"
  | "translator"
  | "publisher"
  | "thumbnail"
  | "createdAt"
  | "updatedAt"
>;

export interface Review {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  user: {
    id: number;
    userId: string;
  };
  book: BookInReview;
}
