import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 334px;
  height: 163px;
  margin-top: 20px;
  background: #ffffff;
  box-shadow: 0px 2px 15px 5px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
`;
const Encouragement = styled.div`
  position: absolute;
  width: 111px;
  height: 26px;
  line-height: 26px;
  text-align: center;
  top: -35px;
  left: 60%;
  background-color: #d9d9d9;
  border-radius: 8px 8px 8px 0px;
  font-family: 'LINE Seed Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.04em;
  color: #000000;
`;
const ProgressLabel = styled.span`
  position: absolute;
  bottom: -19px;
  left: 0;
  font-size: 10px;
  color: #79bcf6;
`;

const TotalLabel = styled.span`
  position: absolute;
  bottom: -19px;
  left: 90%;
  font-size: 10px;
  color: #79bcf6;
`;

const ProgressBarWrapper = styled.div`
  width: 305px;
  height: 20px;
  background-color: #f2f2f2;
  border-radius: 20px;
`;

const ProgressBarPercent = styled.div<{ width: number }>`
  width: ${(props) => `${props.width}%`};
  height: 20px;
  background-color: #79bcf6;
  border-radius: 10px;
`;

// const PercentLabel = styled.div`
//   position: absolute;
//   height: 30px;
//   left: 48%;
//   font-size: 15px;
//   line-height: 30px;
//   color: black;
//   z-index: 2;
// `;

const ProgressBar: React.FC<{
  totalPrice: number;
  satchPrice: number;
}> = ({ totalPrice, satchPrice }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const progress = (satchPrice / totalPrice) * 100;

    setWidth(progress);
  }, [totalPrice, satchPrice]);

  return (
    <Wrapper>
      <ProgressBarWrapper style={{ position: 'relative' }}>
        {/* <PercentLabel >{`${width}%`}</PercentLabel> */}
        <ProgressBarPercent width={width} style={{ position: 'relative' }}>
          <Encouragement>힘을 내요! 으쌰으쌰!</Encouragement>
        </ProgressBarPercent>
        <ProgressLabel>{`${satchPrice.toLocaleString('ko-KR')}`}</ProgressLabel>
        <TotalLabel>{`${totalPrice.toLocaleString('ko-KR')}`}</TotalLabel>
      </ProgressBarWrapper>
    </Wrapper>
  );
};

export default ProgressBar;
