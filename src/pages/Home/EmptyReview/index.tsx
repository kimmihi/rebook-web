import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { colors } from "theme";
import Button from "components/Button";
import Typography from "components/Typography";

const Container = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const EmptyReview = () => {
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate("/me");
  };
  return (
    <Container>
      <Typography
        style={{
          fontSize: "18px",
          color: colors.gray[70],
        }}
      >
        아직 작성된 리뷰가 없습니다.
      </Typography>
      <Button
        variant="contained"
        color="warning"
        style={{ marginTop: "16px", height: "36px" }}
        onClick={handleClickButton}
      >
        읽을 책 등록하기
      </Button>
    </Container>
  );
};

export default EmptyReview;
