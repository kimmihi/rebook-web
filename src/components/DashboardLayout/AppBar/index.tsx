import styled from "styled-components";

import { MOBILE_APP_BAR_HEIGHT } from "configs/theme";

import Button from "components/Button";
import Typography from "components/Typography";

const Header = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  height: ${MOBILE_APP_BAR_HEIGHT}px;
  padding: 32px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AppBar = () => {
  return (
    <Header>
      <Typography variant="title">Rebook</Typography>
      <Button>내 정보</Button>
    </Header>
  );
};

export default AppBar;
