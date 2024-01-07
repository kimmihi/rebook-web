import type { Book, RegisterReadingBookDTO } from "types/book";
import request from "./request";

export const getBookItem = async (bookId: number): Promise<Book> => {
  const response = await request({
    method: "get",
    url: `/books/${bookId}`,
  });

  return response?.data;
};

export const getReadingBookList = async (): Promise<Book[]> => {
  const response = await request({
    method: "get",
    url: "/books",
  });

  return response?.data;
};

export const registerReadingBook = async (book: RegisterReadingBookDTO) => {
  const response = await request({
    method: "post",
    url: "/books",
    body: book,
  });

  return response;
};
