import styled from "styled-components";

import { colors } from "theme";

import Typography from "components/Typography";

interface Props {
  title: string;
  content: string;
}

const Container = styled.div`
  display: flex;
`;
const TextPairTypo = ({ title, content }: Props) => {
  return (
    <Container>
      <Typography
        style={{
          color: colors.gray[50],
          fontWeight: 500,
        }}
      >
        {title}
      </Typography>
      <Typography style={{ marginLeft: "8px" }}>{content}</Typography>
    </Container>
  );
};

export default TextPairTypo;
