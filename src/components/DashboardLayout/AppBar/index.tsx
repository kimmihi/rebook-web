import styled from "styled-components";
import { FaUserAlt } from "react-icons/fa";

import { APP_BAR_HEIGHT } from "configs/theme";

import accessToken from "utils/accessToken";

import IconButton from "components/IconButton";
import Typography from "components/Typography";

const Header = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  height: ${APP_BAR_HEIGHT}px;
  padding: 32px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AppBar = () => {
  const isLoggedIn = accessToken.getToken() === null ? false : true;
  return (
    <Header>
      <Typography variant="title">Rebook</Typography>
      {isLoggedIn && (
        <IconButton>
          <FaUserAlt />
        </IconButton>
      )}
    </Header>
  );
};

export default AppBar;
