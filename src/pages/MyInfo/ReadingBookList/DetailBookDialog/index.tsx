import type { ForwardedRef } from "react";
import type { Book } from "types/book";

import { forwardRef } from "react";
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
  onClose: () => void;
}

const Box = styled.div`
  margin-top: 16px;
`;
const FlexBox = styled.div`
  display: flex;
`;

const DetailBookDialog = (
  { book, onClose }: Props,
  ref: ForwardedRef<HTMLDialogElement>
) => {
  return (
    <Dialog ref={ref} style={{ width: "600px" }}>
      <DialogContent style={{ position: "relative" }}>
        <FlexBox>
          <Image
            src={book.thumbnail}
            alt={book.title}
            width={150}
            height={200}
          />
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
        <Box>
          <Typography style={{ lineHeight: "28px", color: colors.gray[100] }}>
            {book.contents}....
          </Typography>
        </Box>
      </DialogContent>
      <DialogActions style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="outlined"
          style={{ marginRight: "8px" }}
          onClick={onClose}
        >
          닫기
        </Button>
        <Button variant="contained" color="warning">
          읽음
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default forwardRef(DetailBookDialog);
