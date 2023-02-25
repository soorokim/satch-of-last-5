import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ProgressLabel = styled.span`
  position: absolute;
  bottom: -19px;
  left: 0;
  font-size: 10px;
  color: #79BCF6;
`;

const TotalLabel = styled.span`
  position: absolute;
  bottom: -19px;
  left: 90%;
  font-size: 10px;
  color: #79BCF6;
`;

const ProgressBarWrapper = styled.div`
  width: 300px;
  height: 30px;
  background-color: #f2f2f2;
  border-radius: 20px;
`

const ProgressBarPercent = styled.div<{ width: number }>`
  height: 30px;
  background-color: #79BCF6;
  border-radius: 20px;
  width: ${(props) => `${props.width}%`};
`;

const PercentLabel = styled.div`
  position: absolute;
  height:30px;
  left: 47%;
  font-size: 20px;
  color: black;
`;

const ProgressBar: React.FC<{
    totalPrice: number;
    satchPrice: number;
}> = ({ totalPrice, satchPrice }) => {
    const [width, setWidth] = useState(0)

    useEffect(() => {
        const progress = (satchPrice / totalPrice) * 100
        setWidth(progress)
    }, [totalPrice, satchPrice])

    return (
        <div style={{ position: 'relative' }}>
            <ProgressLabel>{`${satchPrice.toLocaleString('ko-KR')}`}</ProgressLabel>
            <TotalLabel>{`${totalPrice.toLocaleString('ko-KR')}`}</TotalLabel>
            <ProgressBarWrapper>
                <ProgressBarPercent width={width}>
                    <PercentLabel>{`${width}%`}</PercentLabel>
                </ProgressBarPercent>
            </ProgressBarWrapper>
        </div>);
};

export default ProgressBar;