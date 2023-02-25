import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
`;
const Emoji = styled.span`
  width: 59px;
  height: 59px;
  background: #ebf5ff;
  border: 1px solid #79bcf6;
  border-radius: 60px;
  font-size: 40px;
`;
const TextWrapper = styled.span`
  font-family: 'LINE Seed Sans KR';
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
  color: #000000;
  text-align: start;
  margin-left: 14px;
`;
const Goal = styled.span`
  font-family: 'LINE Seed Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
  color: #000000;
`;
const Achieve = styled.span`
  font-family: 'LINE Seed Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: #000000;
`;
const RemainPrice = styled.div``;

const ToAchieve = () => (
  <Wrapper>
    <Emoji>🎧</Emoji>
    <TextWrapper>
      <Goal>에어맥</Goal>
      <Achieve> 이루기까지</Achieve>
      <RemainPrice>1,654,000</RemainPrice>
    </TextWrapper>
  </Wrapper>
);

export default ToAchieve;
