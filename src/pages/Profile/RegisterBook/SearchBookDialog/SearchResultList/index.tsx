import type { KakaoBook } from "types/kakao-book";

import styled from "styled-components";

import { colors } from "theme";

import Typography from "components/Typography";
import BookCard from "./BookCard";

interface Props {
  list?: Array<KakaoBook>;
  isLoading: boolean;
  isError: boolean;
  onRegisterBook: (book: KakaoBook) => void;
}

const Container = styled.div`
  height: 500px;
  overflow: auto;
  margin-top: 16px;
`;

const SearchResultList = ({
  list,
  isLoading,
  isError,
  onRegisterBook,
}: Props) => {
  if (list === undefined) {
    return (
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography style={{ color: colors.gray[60] }}>
          먼저 등록하실 책을 검색해주세요.
        </Typography>
      </Container>
    );
  }

  if (list.length === 0) {
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography style={{ color: colors.gray[60] }}>
        검색하신 책을 찾을 수 없습니다.
      </Typography>
    </Container>;
  }

  return (
    <Container>
      {list.map((book) => (
        <BookCard key={book.isbn} book={book} onClickBook={onRegisterBook} />
      ))}
    </Container>
  );
};

export default SearchResultList;
