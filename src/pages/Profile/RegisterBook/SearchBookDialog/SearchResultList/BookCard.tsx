import type { KakaoBook } from "types/kakao-book";

import styled from "styled-components";

import Button from "components/Button";
import Image from "components/Image";
import Typography from "components/Typography";

interface Props {
  book: KakaoBook;
  onClickBook: (book: KakaoBook) => void;
}

const Card = styled.div`
  padding: 8px 16px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  box-shadow: 5px 5px 15px #f2f2f2;
  margin-bottom: 24px;
`;

const Box = styled.div`
  height: 120px;
`;

const BookCard = ({ book, onClickBook }: Props) => {
  return (
    <Card>
      <Image src={book.thumbnail} alt={book.title} width={100} height={120} />
      <Box
        style={{
          marginLeft: "16px",
          flex: 6,
          lineHeight: "24px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography style={{ fontWeight: 500 }}>{book.title}</Typography>
          <Typography>저자: {book.authors.toLocaleString()}</Typography>
        </Box>
        <Typography>출판사: {book.publisher}</Typography>
      </Box>
      <Box style={{ flex: 1, height: "100%" }}>
        <Button
          variant="contained"
          color="warning"
          onClick={() => onClickBook(book)}
        >
          등록
        </Button>
      </Box>
    </Card>
  );
};

export default BookCard;
