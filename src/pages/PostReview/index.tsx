import type { PostReviewFormFieldValues } from "types/review";
import { useParams, useNavigate } from "react-router-dom";

import styled from "styled-components";

import { postReview } from "api/review";

import useBookItem from "hooks/query/book/useBookItem";

import DashboardLayout from "components/DashboardLayout";
import ReadingBookData from "components/Books/ReadingBookData";

import PostReivewFormLogic from "./Form/Logic";

const Box = styled.div`
  margin-top: 16px;
`;

const PostReview = () => {
  const navigate = useNavigate();
  const { bookId: strBookId } = useParams();
  const bookId = Number(strBookId);

  if (!bookId || Number.isNaN(bookId)) {
    navigate("/me");
  }

  const { data } = useBookItem(bookId);

  const handleSubmit = async (formFieldValues: PostReviewFormFieldValues) => {
    try {
      await postReview({
        ...formFieldValues,
        bookId,
      });
      navigate("/me");
    } catch {
      console.error("Error Post Reivew");
    }
  };

  return (
    <DashboardLayout>
      {data && <ReadingBookData book={data} />}
      <Box>
        <PostReivewFormLogic onSubmit={handleSubmit} />
      </Box>
    </DashboardLayout>
  );
};

export default PostReview;
