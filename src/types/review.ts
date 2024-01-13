import type { Book } from "./book";
import type { User } from "./user";
export interface PostReviewDTO extends PostReviewFormFieldValues {
  book: Book;
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
  user: User;
  book: Book;
}
