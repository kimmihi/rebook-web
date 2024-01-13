import type { BookInReview } from "types/review";

import styled from "styled-components";
import dayjs from "dayjs";

import { colors } from "theme";
import Image from "components/Image";
import Typography from "components/Typography";
import TextPairTypo from "components/Books/BookDataView/TextData/TextPairTypo";

interface Props {
  book: BookInReview;
}

const Container = styled.div`
  display: flex;
`;

const Box = styled.div`
  line-height: 24px;
`;

const BookDataView = ({ book }: Props) => {
  return (
    <Container>
      <Image src={book.thumbnail} alt={book.title} width={120} height={150} />
      <Box
        style={{
          paddingLeft: "16px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            style={{
              fontSize: "18px",
              fontWeight: 500,
            }}
          >
            {book.title}
          </Typography>
        </Box>
        <Box>
          <TextPairTypo title="저자" content={book.author} />
          {book.translator && (
            <TextPairTypo title="번역" content={book.translator} />
          )}
          <TextPairTypo title="출판사" content={book.publisher} />
        </Box>
        <Box>
          <Typography
            style={{
              fontSize: "15px",
              color: colors.gray[60],
            }}
          >
            {`${dayjs(book.createdAt).format("YYYY년 MM월 DD일")} ~ ${dayjs(
              book.updatedAt
            ).format("YYYY년 MM월 DD일")}`}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default BookDataView;
