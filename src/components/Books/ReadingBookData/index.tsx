import type { ForwardedRef } from "react";
import type { Book } from "types/book";

import { forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { colors } from "theme";
import Button from "components/Button";
import Dialog from "components/Dialog";
import DialogContent from "components/Dialog/DialogContent";
import DialogActions from "components/Dialog/DialogActions";
import Image from "components/Image";
import Typography from "components/Typography";

import BookDataView from "./BookDataView";

interface Props {
  book: Book;
}

const FlexBox = styled.div`
  display: flex;
`;

const ReadingBookData = ({ book }: Props) => {
  return (
    <FlexBox>
      <Image src={book.thumbnail} alt={book.title} width={150} height={200} />
      <BookDataView
        data={{
          title: book.title,
          author: book.author,
          translator: book.translator,
          sale_price: book.sale_price,
          publisher: book.publisher,
          createdAt: book.createdAt,
        }}
      />
    </FlexBox>
  );
};

export default ReadingBookData;
