import type { User } from "types/user";

import styled from "styled-components";
import { colors } from "theme";

import Typography from "components/Typography";
import Button from "components/Button";

interface Props {
  user?: User;
  loading: boolean;
}

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-radius: 8px;
  background-color: ${colors.gray[10]};
`;

const Box = styled.div``;

const UserCard = ({ user, loading }: Props) => {
  return (
    <Container>
      <Box style={{ lineHeight: "24px" }}>
        <Typography style={{ fontWeight: 500 }}>{user?.name}</Typography>
        <Typography>{user?.userId}</Typography>
        <Typography>{user?.email}</Typography>
      </Box>
      <Box style={{ display: "flex", flexDirection: "column" }}>
        <Button
          variant="outlined"
          style={{ height: "36px", marginBottom: "8px" }}
        >
          정보 수정
        </Button>
        <Button variant="contained" color="warning" style={{ height: "36px" }}>
          로그 아웃
        </Button>
      </Box>
    </Container>
  );
};

export default UserCard;
