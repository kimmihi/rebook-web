import styled from "styled-components";

import useReviewList from "hooks/query/review/useReviewList";

import DashboardLayout from "components/DashboardLayout";
import TextField from "components/TextField";
import ReviewCard from "./ReviewCard";

const SearchBox = styled.div`
  text-align: center;
`;

const GridContainer = styled.div`
  position: relative;
  display: grid;
  grid-gap: clamp(1.375rem, 1.2rem + 0.89vw, 2rem);
  margin-top: 32px;
  margin-inline: auto;
  padding-inline: clamp(0, 1.2rem + 0.89vw, 2rem);
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
`;

const Home = () => {
  const { data } = useReviewList({
    page: 1,
    size: 10,
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
      <GridContainer>
        {data?.data.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </GridContainer>
    </DashboardLayout>
  );
};

export default Home;
