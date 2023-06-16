import styled from 'styled-components';

interface SubmitBtnProps {
  text?: string;
  additionalStyles?: string;
}

const defaultProps: SubmitBtnProps = {
  text: '',
  additionalStyles: '',
};

const Button = styled.button<SubmitBtnProps>`
  width: 100%;
  height: 52px;
  font-family: 'LINE Seed Sans KR';
  border-radius: 100px;
  font-weight: 700;
  font-size: 16px;
  background-color: #79bcf6;
  color: #ffffff;
  border: unset;
  outline: none;
  &:focus {
    outline: none;
  }
  &:hover {
    outline: none;
  }
  ${(props) => props.additionalStyles};
`;

const SubmitBtn = ({ text, additionalStyles }: SubmitBtnProps) => (
  <Button additionalStyles={additionalStyles}>{text}</Button>
);

SubmitBtn.defaultProps = defaultProps;
export default SubmitBtn;
