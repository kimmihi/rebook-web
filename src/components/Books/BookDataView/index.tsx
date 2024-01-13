import type { Book, BookStatus } from "types/book";

import styled from "styled-components";

import Image from "components/Image";

import BookTextData from "./TextData";

interface Props {
  book: Book;
  status: BookStatus;
  imgWidth: number;
  imgHeight: number;
}

const FlexBox = styled.div`
  display: flex;
`;

const ReadingBookData = ({ book, status, imgWidth, imgHeight }: Props) => {
  return (
    <FlexBox>
      <Image
        src={book.thumbnail}
        alt={book.title}
        width={imgWidth}
        height={imgHeight}
      />
      <BookTextData
        data={{
          status: book.status,
          title: book.title,
          author: book.author,
          translator: book.translator,
          sale_price: book.sale_price,
          publisher: book.publisher,
          createdAt: book.createdAt,
          updatedAt: book.updatedAt,
        }}
      />
    </FlexBox>
  );
};

export default ReadingBookData;
