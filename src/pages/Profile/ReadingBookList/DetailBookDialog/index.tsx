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
import Typography from "components/Typography";

import BookDataView from "components/Books/BookDataView";

interface Props {
  book: Book;
  onClose: () => void;
}

const Box = styled.div`
  margin-top: 16px;
`;

const DetailBookDialog = (
  { book, onClose }: Props,
  ref: ForwardedRef<HTMLDialogElement>
) => {
  const navigate = useNavigate();

  const handleClickReadButton = () => {
    navigate(`/post/review/${book.id}`);
  };
  return (
    <Dialog ref={ref} style={{ width: "600px" }}>
      <DialogContent style={{ position: "relative" }}>
        <BookDataView
          book={book}
          status="READING"
          imgWidth={150}
          imgHeight={200}
        />
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
        <Button
          variant="contained"
          color="warning"
          onClick={handleClickReadButton}
        >
          읽음
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default forwardRef(DetailBookDialog);
