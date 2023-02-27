import styled from 'styled-components';



const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 335px;
  height: 190px;
  background: #ffffff;
  border: 1px solid #ededed;
  border-radius: 16px;
`;
const Text = styled.div`
  font-family: 'LINE Seed Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #999999;
`;

const TotalSatch = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const TotalPrice = styled.span`
  font-family: 'LINE Seed Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0.04em;
  color: #79bcf6;
  margin-right: 3px;
`;
const TodayTotalTitle = styled.span`
  font-family: 'LINE Seed Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.04em;
  color: #000000;
`;

const TotalPriceWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Basic = styled.span`
  font-family: 'LINE Seed Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.04em;
  color: #000000;
  margin-right: 5px;
`;

const NonStachList = () => (
  <div>
    <TotalSatch>
      <TodayTotalTitle>오늘의 삿치</TodayTotalTitle>
      <TotalPriceWrapper>
        <Basic>총</Basic>
        <TotalPrice>0</TotalPrice>
        <Basic>원</Basic>
      </TotalPriceWrapper>
    </TotalSatch>
    <Wrapper>
      <div>
        <Text>아직 내역이 없어요.</Text>
        <Text>지금 바로 시작해 보세요!</Text>
      </div>
    </Wrapper>
  </div>
);

export default NonStachList;
