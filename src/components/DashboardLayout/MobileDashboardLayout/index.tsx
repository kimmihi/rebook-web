import type { ReactNode } from "react";
import styled from "styled-components";

import AppBar from "./AppBar";
import Main from "./Main";

interface Props {
  children?: ReactNode | ReactNode[];
}

const Container = styled.div``;

const MobileDashboardLayout = ({ children }: Props) => {
  return (
    <Container>
      <AppBar />
      <Main>{children}</Main>
    </Container>
  );
};

export default MobileDashboardLayout;
