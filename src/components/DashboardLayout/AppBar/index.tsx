import { useNavigate } from "react-router-dom";

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
  padding: 48px 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 1px 7px #e6e6e6;
  background-color: #fff;
  z-index: 999;
`;

const AppBar = () => {
  const navigate = useNavigate();
  const isLoggedIn = accessToken.getToken() === null ? false : true;

  const handleClickLogo = () => {
    navigate("/");
  };

  const handleClickMyInfo = () => {
    navigate("/me");
  };
  return (
    <Header>
      <Typography
        variant="title"
        role="button"
        onClick={handleClickLogo}
        style={{ cursor: "pointer" }}
      >
        Rebook
      </Typography>
      {isLoggedIn && (
        <IconButton onClick={handleClickMyInfo}>
          <FaUserAlt />
        </IconButton>
      )}
    </Header>
  );
};

export default AppBar;
