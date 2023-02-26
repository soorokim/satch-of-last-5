import styled from 'styled-components';
import { Satch } from '../../atoms/goalList';

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

const ToAchieve = ({ price, satchList }: { price: number, satchList: Satch[] }) => {
    const satchTotalPrice = satchList.reduce((acc, cur: Satch) => acc + cur.price, 0);
    const remainPrice = price - satchTotalPrice
    return (<Wrapper>
        <TextWrapper>
            <Goal>에어맥</Goal>
            <Achieve> 이루기까지</Achieve>
            <RemainPrice>총 {`${remainPrice.toLocaleString('ko-KR')}원`}</RemainPrice>
        </TextWrapper>
    </Wrapper>)
};

export default ToAchieve;
