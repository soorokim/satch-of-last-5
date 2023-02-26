import styled from 'styled-components';
import { Goal, Satch } from '../../atoms/goalList';

const Wrapper = styled.div`
  display: flex;
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

const GoalName = styled.span`
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

// eslint-disable-next-line no-undef
const ToAchieve = ({
  name,
  price,
  satchList,
}: {
  name: Goal['name'];
  price: Goal['price'];
  satchList: Goal['satchList'];
}) => {
  const satchTotalPrice = satchList.reduce((acc, cur: Satch) => acc + cur.price, 0);
  const remainPrice = price - satchTotalPrice;

  return (
    <Wrapper>
      <TextWrapper>
        <GoalName>{name}</GoalName>
        <Achieve> 이루기까지</Achieve>
        <RemainPrice>총 {`${remainPrice.toLocaleString('ko-KR')}원`}</RemainPrice>
      </TextWrapper>
    </Wrapper>
  );
};

export default ToAchieve;
