import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 32px 29px;
`;

const ReachWrapper = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  margin: 0px 20px;
`;
const ReachTitle = styled.span`
  font-family: 'LINE Seed Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  margin-bottom: 9px;
`;
const ReachPercentWrapper = styled.span``;
const ReachPercent = styled.span`
  font-family: 'LINE Seed Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 150%;
  color: #79bcf6;
`;
const TenPercent = styled.span`
  font-family: 'LINE Seed Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #000000;
`;

const ZeroPercentLabel = styled.span`
  position: absolute;
  bottom: -19px;
  left: 0;
  font-size: 10px;
  color: #000000;
  margin: 1px;
`;

const TenPercentLabel = styled.span`
  position: absolute;
  bottom: -19px;
  font-size: 10px;
  right: 0%;
  color: #000000;
  margin: 1px;
`;

const ProgressBarWrapper = styled.div`
  width: 305px;
  height: 20px;
  background: #D9D9D9;
  border-radius: 10px;
`;

const ProgressBarPercent = styled.div<{ width: number }>`
  width: ${(props) => `${props.width}%`};
  height: 20px;
  background-color: #79bcf6;
  border-radius: 10px;
`;

interface ProgressBarProps {
  satchTotalPrice: number;
  goalPrice: number
}


const ProgressBar = ({ satchTotalPrice, goalPrice }: ProgressBarProps) => {
  const percent = Math.round((satchTotalPrice / goalPrice) * 100);

  return (
    <Wrapper>
      <ReachWrapper>
        <ReachTitle>도달률</ReachTitle>
        <ReachPercentWrapper>
          <ReachPercent>{percent}</ReachPercent>
          <TenPercent> / 100</TenPercent>
        </ReachPercentWrapper>
      </ReachWrapper>
      <ProgressBarWrapper style={{ position: 'relative' }}>
        <ProgressBarPercent width={percent > 100 ? 100 : percent} />
        <ZeroPercentLabel>0</ZeroPercentLabel>
        <TenPercentLabel>100</TenPercentLabel>
      </ProgressBarWrapper>
    </Wrapper>
  );
};

export default ProgressBar;
