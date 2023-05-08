import styled from 'styled-components';

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

interface SatchItemHeaderProps {
  title: string;
  amount: number;
}

const SatchListHeader = ({ title, amount = 0 }: SatchItemHeaderProps) => {
  return (
    <TotalSatch>
      <TodayTotalTitle>{title}</TodayTotalTitle>
      <TotalPriceWrapper>
        <Basic>총</Basic>
        <TotalPrice>{amount.toLocaleString()}</TotalPrice>
        <Basic>원</Basic>
      </TotalPriceWrapper>
    </TotalSatch>
  );
};

export default SatchListHeader;
