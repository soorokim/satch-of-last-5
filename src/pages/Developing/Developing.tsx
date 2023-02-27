import styled from 'styled-components';
import TextUnderline from '../../components/TextUnderline';

const Wrapper = styled.div`
  padding: 40px 20px 36px;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Developing = () => (
  <Wrapper>
    <TextUnderline fontSize="30px" fontWeight="700">
      현재 구현중입니다!
    </TextUnderline>
  </Wrapper>
);

export default Developing;
