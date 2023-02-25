import { useState } from 'react';
import styled from 'styled-components';
import Footer from '../../components/Footer';
import NonStachList from '../../components/NonStachList';
import ProgressBar from '../../components/ProgressBar';
import SatchList from '../../components/SatchList';
import ToAchieve from './ToAchieve';

const Wrapper = styled.div`
  margin-top: 10%;
`;
const TotalSatch = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 11px;
`;

const TotalPrice = styled.div`
  font-family: 'LINE Seed Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: 0.04em;
  color: #000000;
`;
const TotalTitle = styled.div`
  color: #000000;
  font-family: 'LINE Seed Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 150%;
`;
const Main = () => {
  const [satchItem] = useState(['']);
  const [totalPrice] = useState(100000);
  return (
    <Wrapper>
      <ToAchieve />
      <ProgressBar satchPrice={60000} totalPrice={100000} />
      <TotalSatch>
        <TotalTitle>삿치 리스트</TotalTitle>
        <TotalPrice>{`총 ${totalPrice.toLocaleString('ko-KR')}원`}</TotalPrice>
      </TotalSatch>
      {satchItem && satchItem.length === 0 ? <NonStachList /> : <SatchList />}
      <Footer />
    </Wrapper>
  );
};
export default Main;
