import type { ReactNode } from "react";
import styled from "styled-components";

import AppBar from "./AppBar";
import Main from "./Main";

interface Props {
  children?: ReactNode | ReactNode[];
}

const Container = styled.div`
  display: flex;
`;

const DesktopDashboardLayout = ({ children }: Props) => {
  return (
    <Container>
      <AppBar />
      <Main>{children}</Main>
    </Container>
  );
};

export default DesktopDashboardLayout;
