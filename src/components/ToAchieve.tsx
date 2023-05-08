import styled from 'styled-components';
import { Goal, Satch } from '../atoms/goalList';

const Wrapper = styled.div`
  display: flex;
`;

const TextWrapper = styled.span`
  text-align: start;
  margin-top: 32px;
  margin-left: 20px;
`;

const GoalName = styled.span`
  font-family: 'LINE Seed Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 150%;
  color: #000000;
  background: linear-gradient(to top, #79bcf6b2 30%, transparent 30%);
`;
const Achieve = styled.span`
  font-family: 'LINE Seed Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 150%;
  color: #000000;
`;

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
      {remainPrice < 0 ? (
        <TextWrapper>
          <div>
            <GoalName>축하합니다! 👏🏼</GoalName>
          </div>
          <GoalName>목표를 완수하였습니다.</GoalName>
        </TextWrapper>
      ) : (
        <TextWrapper>
          <div>
            <GoalName>{name}</GoalName>
            <Achieve> 이루기까지</Achieve>
          </div>
          <Achieve>총 </Achieve>
          <GoalName>{`${remainPrice.toLocaleString('ko-KR')}`}</GoalName>
          <Achieve>원 남았어요!</Achieve>
        </TextWrapper>
      )}
    </Wrapper>
  );
};

export default ToAchieve;
