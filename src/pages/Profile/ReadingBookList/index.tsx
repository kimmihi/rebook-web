import type { Book } from "types/book";
import { useState } from "react";
import styled from "styled-components";

import useReadingBookList from "hooks/query/book/useReadingBook";
import useDialog from "hooks/useDialog";

import BookCard from "./BookCard";
import DetailBookDialog from "./DetailBookDialog";

const Box = styled.div`
  margin-right: 16px;
  cursor: pointer;
`;

const ReadingBookList = () => {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const { ref, onOpen, onClose } = useDialog();

  const { data: bookList, isLoading, isError } = useReadingBookList();

  const handleClickBook = (book: Book) => {
    setSelectedBook(book);
    onOpen();
  };

  return (
    <>
      {bookList?.map((book) => (
        <Box role="button" key={book.id} onClick={() => handleClickBook(book)}>
          <BookCard book={book} />
        </Box>
      ))}
      {selectedBook && (
        <DetailBookDialog ref={ref} book={selectedBook} onClose={onClose} />
      )}
    </>
  );
};

export default ReadingBookList;
