import styled from "styled-components";

interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const Container = styled.div<{ $width: number; $height: number }>`
  width: ${({ $width }) => `${$width}px`};
  height: ${({ $height }) => `${$height}px`};
`;

const Image = ({ src, alt, width, height }: Props) => {
  return (
    <Container $width={width} $height={height}>
      <img
        src={src}
        alt={alt}
        style={{ width: "100%", height: "100%", borderRadius: "4px" }}
      />
    </Container>
  );
};

export default Image;
