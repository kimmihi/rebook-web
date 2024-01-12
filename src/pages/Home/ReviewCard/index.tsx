import type { Review } from "types/review";

import styled from "styled-components";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

import { colors } from "theme";
import IconButton from "components/IconButton";
import Typography from "components/Typography";

import BookDataView from "./BookDataView";

interface Props {
  review: Review;
}

const Card = styled.div`
  max-width: 450px;
  padding: 16px;
  border: 1px solid ${colors.gray[20]};
  border-radius: 8px;
`;

const ReviewDataView = styled.div`
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid ${colors.gray[20]};
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ContentBox = styled.p`
  margin-top: 16px;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 24px;
  font-size: 15px;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  color: ${colors.gray[90]};
`;

const ActionBox = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: flex-end;
`;

const ReviewCard = ({ review }: Props) => {
  return (
    <Card>
      <BookDataView book={review.book} />
      <ReviewDataView>
        <FlexBox>
          <Typography
            variant="sub-title"
            style={{ color: colors.primary.light, fontSize: "20px" }}
          >
            {review.title}
          </Typography>
          <Typography>{review.user.userId}님</Typography>
        </FlexBox>
        <ContentBox>{review.content}</ContentBox>
      </ReviewDataView>
      <ActionBox>
        <IconButton color="warning">
          <MdKeyboardDoubleArrowRight style={{ fontSize: "24px" }} />
        </IconButton>
      </ActionBox>
    </Card>
  );
};

export default ReviewCard;
