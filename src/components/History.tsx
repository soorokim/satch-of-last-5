import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import HistoryItem from '../assets/history.svg';
import Circle from '../assets/circle.svg';
import pointerIcon from '../assets/pointer.svg';
import Footer from './Footer';

const Wrap = styled.div`
  margin: 0 auto;
  width: 375px;
  height: 722px;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  border: none;
`;
const HistoryIcon = styled.img`
  margin-top: 20%;
  margin-left: 5%;
`;
const Progreesing = styled.div`
  width: 70px;
  height: 30px;
  margin-top: 15%;
  margin-left: 5%;
  text-align: left;
  font-family: 'LINE Seed Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
`;
// 진행중 아이템 스타일 컴포넌트
const ProgreesingItem = styled.div`
  width: 350px;
  height: 86px;
  margin-top: 5%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const CircleImg = styled.img`
  margin-left: 5%;
`;
const ProgreesingTitle = styled.div`
  margin-left: -40%;
  font-family: 'LINE Seed Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: 0.04em;

  color: #000000;
`;
const Pointer = styled.img`
  cursor: pointer;
`;
const Completed = styled.div`
  width: 70px;
  height: 30px;
  margin-top: 15%;
  margin-left: 5%;
  text-align: left;
  font-family: 'LINE Seed Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
`;
const CompletedItem = styled.div`
  margin: 20px 0 20px 0;
  width: 335px;
  height: 86px;
  width: 350px;
  height: 86px;
  margin-top: 5%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const CompletedTitle = styled.div`
  margin-left: -13%;
  font-family: 'LINE Seed Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: 0.04em;

  color: #000000;
`;
const History = () => {
  const navigate = useNavigate();
  const ProgreesingHandler = () => {
    navigate('/');
  };
  const CompletedHandler = () => {
    navigate('/');
  };

  return (
    <div>
      <Wrap>
        <HistoryIcon src={HistoryItem} />
        <Progreesing>진행 중</Progreesing>
        {/* 진행중 아이템 */}
        <ProgreesingItem>
          <CircleImg src={Circle} />
          <ProgreesingTitle>맥북구매</ProgreesingTitle>
          <Pointer onClick={ProgreesingHandler} src={pointerIcon} />
        </ProgreesingItem>
        <div style={{ height: '10px', backgroundColor: '#F8F8FA' }}>{}</div>
        <Completed>달성</Completed>
        {/* 달성 아이템 */}
        <CompletedItem>
          <CircleImg src={Circle} />
          <CompletedTitle>한강 뷰 아파트 구매</CompletedTitle>
          <Pointer onClick={CompletedHandler} src={pointerIcon} />
        </CompletedItem>
      </Wrap>
      <Footer />
    </div>
  );
};

export default History;
