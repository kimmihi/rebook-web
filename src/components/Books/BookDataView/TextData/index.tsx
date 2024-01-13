import type { Book } from "types/book";

import styled from "styled-components";
import dayjs from "dayjs";

import { colors } from "theme";
import Typography from "components/Typography";

import TextPairTypo from "./TextPairTypo";

interface Props {
  data: BookData;
}

type BookData = Pick<
  Book,
  | "title"
  | "author"
  | "status"
  | "translator"
  | "sale_price"
  | "publisher"
  | "createdAt"
  | "updatedAt"
>;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 16px;
`;

const Box = styled.div`
  line-height: 26px;
`;

const BookTextData = ({ data }: Props) => {
  return (
    <Container>
      <Typography
        variant="sub-title"
        style={{ fontSize: "20px", lineHeight: "24px" }}
      >
        {data.title}
      </Typography>
      <Box>
        <TextPairTypo title="저자" content={data.author} />
        {data.translator && (
          <TextPairTypo title="번역" content={data.translator} />
        )}
        <TextPairTypo
          title="판매가"
          content={data.sale_price.toLocaleString()}
        />
        <TextPairTypo title="출판사" content={data.publisher} />
      </Box>

      {data.status === "READING" ? (
        <Typography
          style={{
            color: colors.gray[80],
            lineHeight: "24px",
          }}
        >
          {dayjs(data.createdAt).format("YYYY년-MM월-DD일")}부터 읽기
          시작했습니다.
        </Typography>
      ) : (
        <Typography
          style={{
            fontSize: "15px",
            color: colors.gray[60],
          }}
        >
          {`${dayjs(data.createdAt).format("YYYY년 MM월 DD일")} ~ ${dayjs(
            data.updatedAt
          ).format("YYYY년 MM월 DD일")}`}
        </Typography>
      )}
    </Container>
  );
};

export default BookTextData;
