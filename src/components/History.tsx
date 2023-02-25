import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import HistoryItem from '../assets/history.svg';
import Circle from '../assets/circle.svg';
import pointerIcon from '../assets/pointer.svg';

const Wrap = styled.div`
  margin: 0 auto;
  width: 375px;
  height: 812px;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  border: 1px solid black;
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
const History = () => {
  const navigate = useNavigate();
  const PointerHandler = () => {
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
          <Pointer onClick={PointerHandler} src={pointerIcon} />
        </ProgreesingItem>
      </Wrap>
    </div>
  );
};

export default History;
