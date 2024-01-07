import styled from "styled-components";
import useReadingBookList from "hooks/query/book/useReadingBook";

import BookCard from "./BookCard";

const Box = styled.div`
  margin-right: 16px;
`;

const ReadingBookList = () => {
  const { data: bookList, isLoading, isError } = useReadingBookList();
  return (
    <>
      {bookList?.map((book) => (
        <Box key={book.id}>
          <BookCard book={book} />
        </Box>
      ))}
    </>
  );
};

export default ReadingBookList;
