export type BookStatus = "READING" | "DONE";

export interface RegisterReadingBookDTO {
  title: string;
  contents: string;
  author: string;
  translator: string;
  isbn: string;
  sale_price: number;
  publisher: string;
  thumbnail: string;
  datetime: Date;
}

export interface Book extends RegisterReadingBookDTO {
  id: number;
  status: BookStatus;
  createdAt: Date;
  updatedAt: Date;
}
