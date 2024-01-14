import styled from "styled-components";

import { useInfiniteScroll } from "react-use-intersection-observer-pack";
import useInfiniteReviewList from "hooks/query/review/useInfiniteReviewList";

import Button from "components/Button";
import DashboardLayout from "components/DashboardLayout";
import TextField from "components/TextField";
import ReviewCard from "./ReviewCard";
import EmptyReview from "./EmptyReview";

const SearchBox = styled.div`
  text-align: center;
`;

const GridContainer = styled.div`
  position: relative;
  display: grid;
  justify-content: center;
  grid-gap: clamp(1.375rem, 1.2rem + 0.89vw, 2rem);
  margin-top: 32px;
  margin-inline: auto;
  padding-inline: clamp(0, 1.2rem + 0.89vw, 2rem);
  grid-template-columns: repeat(auto-fit, minmax(300px, 26rem));
`;

const CenterBox = styled.div`
  text-align: center;
`;

const DEFAULT_PAGE_SIZE = 8;

const Home = () => {
  const { data, isLoading, isError, hasNextPage, fetchNextPage } =
    useInfiniteReviewList(DEFAULT_PAGE_SIZE);

  const { observedTargetRef } = useInfiniteScroll({
    hasMore: !!hasNextPage,
    onLoadMore: fetchNextPage,
  });

  return (
    <DashboardLayout>
      <SearchBox>
        <TextField
          label="리뷰 검색"
          placeholder="책을 검색해서 리뷰를 확인해보세요."
          style={{
            minWidth: "300px",
            width: "60%",
          }}
        />
      </SearchBox>
      {data && data.pages.length > 0 ? (
        <GridContainer>
          {data.pages.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </GridContainer>
      ) : (
        <EmptyReview />
      )}
      <div ref={observedTargetRef} />
    </DashboardLayout>
  );
};

export default Home;
