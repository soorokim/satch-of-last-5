import { CSSProperties } from 'react';
import styled from 'styled-components';

interface TextUnderlineProps {
  children: string;
  fontSize?: CSSProperties['fontSize'];
  fontWeight?: CSSProperties['fontWeight'];
}

interface EmphasisProps {
  fontSize?: CSSProperties['fontSize'];
  fontWeight?: CSSProperties['fontWeight'];
}

const Emphasis = styled.span<EmphasisProps>`
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : undefined)};
  font-weight: ${({ fontWeight }) => fontWeight};
  background: linear-gradient(to top, #79bcf6b2 20%, transparent 20%);
`;

const TextUnderline = ({
  children,
  fontSize = undefined,
  fontWeight = 'inherit',
}: TextUnderlineProps) => (
  <Emphasis fontSize={fontSize} fontWeight={fontWeight} data-testid="textUnderline">
    {children}
  </Emphasis>
);

export default TextUnderline;
