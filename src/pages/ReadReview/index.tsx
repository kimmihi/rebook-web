import { useParams, useNavigate } from "react-router-dom";

import styled from "styled-components";

import useReviewOne from "hooks/query/review/useReviewOne";

import Button from "components/Button";
import BookDataView from "components/Books/BookDataView";
import DashboardLayout from "components/DashboardLayout";
import Typography from "components/Typography";

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 32px;
`;

const ReadReview = () => {
  const navigate = useNavigate();
  const { reviewId: strReviewId } = useParams();
  const reviewId = Number(strReviewId);

  if (!reviewId || Number.isNaN(reviewId)) {
    navigate("/");
  }

  const { data } = useReviewOne(reviewId);

  return (
    <DashboardLayout>
      <Button
        style={{
          padding: 0,
          fontSize: "20px",
        }}
        color="warning"
      >
        {data?.user.userId}님
      </Button>
      {data && (
        <BookDataView
          book={data.book}
          status="DONE"
          imgWidth={180}
          imgHeight={220}
        />
      )}
      <TextContainer>
        <Typography variant="sub-title">{data?.title}</Typography>
        <Typography
          style={{
            marginTop: "16px",
            lineHeight: "24px",
            whiteSpace: "pre-line",
          }}
        >
          {data?.content}
        </Typography>
      </TextContainer>
    </DashboardLayout>
  );
};

export default ReadReview;
