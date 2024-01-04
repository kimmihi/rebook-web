import type { ReactNode } from "react";

import styled from "styled-components";

interface Props {
  children?: ReactNode;
}

const StyledMain = styled.main`
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 16px;
  border-left: 1px solid #f1f2f4;
`;

const Main = ({ children }: Props) => {
  return <StyledMain>{children}</StyledMain>;
};

export default Main;
