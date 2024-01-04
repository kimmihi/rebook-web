import styled from "styled-components";

import { DESKTOP_APP_BAR_WIDTH } from "configs/theme";

import Typography from "components/Typography";

const Header = styled.header`
  position: sticky;
  top: 0;
  width: ${DESKTOP_APP_BAR_WIDTH}px;
  min-width: ${DESKTOP_APP_BAR_WIDTH}px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px 32px;
`;

const AppBar = () => {
  return (
    <Header>
      <Typography variant="title">Rebook</Typography>
    </Header>
  );
};

export default AppBar;
