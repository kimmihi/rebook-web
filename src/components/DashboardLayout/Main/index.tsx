import type { ReactNode } from "react";

import styled from "styled-components";

interface Props {
  children?: ReactNode;
}

const StyledMain = styled.main`
  position: relative;
  width: 100%;
  padding: 32px;
`;

const Main = ({ children }: Props) => {
  return <StyledMain>{children}</StyledMain>;
};

export default Main;
