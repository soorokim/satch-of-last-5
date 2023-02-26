import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { useEffect } from 'react';
import { currentGoalState } from '../../atoms/goalList';
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

const PlusWrapper = styled.div`
  position: sticky;
  bottom: 0;
  float: right;
  width: 50px;
  height: 50px;
  border: 1px solid #79bcf6;
  border-radius: 100px;
  margin: 20px;
`;

const PlusButton = styled.button`
  position: relative;
  width: 50px;
  height: 50px;
  background: #79bcf6;
  border: 1px solid #79bcf6;
  border-radius: 100px;
  z-index: 0;
`;
const Plus = styled.div`
  position: absolute;
  left: 8px;
  top: -8px;
  font-size: 50px;
  z-index: 9999;
  font-weight: 250;
  color: white;
`;

const Main = () => {
  const currentGoal = useRecoilValue(currentGoalState);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentGoal === undefined) {
      navigate('/initial');
    }
  }, [currentGoal]);

  if (currentGoal === undefined) {
    return null;
  }

  return (
    <Wrapper>
      <ToAchieve
        name={currentGoal.name}
        price={currentGoal.price}
        satchList={currentGoal.satchList}
      />
      <ProgressBar goal={currentGoal} />
      <TotalSatch>
        <TotalTitle>삿치 리스트</TotalTitle>
        <TotalPrice>{`총 ${currentGoal.price.toLocaleString('ko-KR')}원`}</TotalPrice>
      </TotalSatch>
      {currentGoal.satchList.length === 0 ? (
        <NonStachList />
      ) : (
        <SatchList satchList={currentGoal.satchList} />
      )}
      <Link to="/setsatchitem">
        <PlusWrapper>
          <PlusButton>
            <Plus>+</Plus>
          </PlusButton>
        </PlusWrapper>
      </Link>
      <Footer />
    </Wrapper>
  );
};

export default Main;
