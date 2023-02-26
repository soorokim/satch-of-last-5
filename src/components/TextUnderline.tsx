import styled from 'styled-components';

const Emphasis = styled.span<any>`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  background: linear-gradient(to top, #79bcf6b2 20%, transparent 20%);
`;

const TextUnderline = ({ children, fontSize, fontWeight }: any) => (
  <Emphasis fontSize={fontSize} fontWeight={fontWeight}>
    {children}
  </Emphasis>
);

export default TextUnderline;
