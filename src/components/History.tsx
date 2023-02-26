import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
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
  margin-left: -13%;
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
const Satch = styled.span`
  width: 210px;
  height: 36px;
  margin-top: 20%;
  left: 4%;
  top: 2%;
  position: relative;

  font-family: 'LINE Seed Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 150%;
  letter-spacing: 0.04em;

  color: #000000;
`;
const SatchComplete = styled.span`
  font-weight: 700;
  background-color: rgba(121, 188, 246, 0.7);
  background: linear-gradient(to top, #79bcf6b2 30%, transparent 30%);
`;

const goalList = [
  {
    name: '유럽여행가기22',
    emoticon: '0',
    price: 2000000,
    percent: 0,
    satchList: [],
    id: 'e66e4312-fc45-4de4-bfcc-ccddf12d5968',
    createdAt: '2023-02-25T18:18:48.352Z',
    endedAt: '2023-02-25T18:18:57.361Z',
  },
  {
    name: '유럽여행가기22',
    emoticon: '0',
    price: 2000000,
    percent: 0,
    satchList: [],
    id: '75cd94f0-3253-4d52-88e5-c6a920570fcb',
    createdAt: '2023-02-25T18:18:58.229Z',
    endedAt: '2023-02-25T19:04:32.563Z',
  },
  {
    name: '유럽여행가기22',
    emoticon: '0',
    price: 2000000,
    percent: 0,
    satchList: [
      {
        name: '삿치템',
        price: 34000,
        date: '2023-02-25T20:57:24.569Z',
        id: '350e8ca1-1d59-4a03-9d90-791be4fc5629',
      },
    ],
    id: '83c906cf-aca7-45c0-8270-2782ae0a6da6',
    createdAt: '2023-02-25T18:19:01.608Z',
  },
];

const completeList = goalList.filter((v) => v.endedAt !== undefined);
const progressingList = goalList.filter((v) => v.endedAt === undefined);

const History = () => {
  const navigate = useNavigate();

  const progreesingHandler = () => {
    navigate('/');
  };
  //  달성 아이템 아직 미정
  const completedHandler = () => {
    navigate('/');
  };

  return (
    <div>
      <Wrap>
        <Satch>
          삿치 <SatchComplete>달성!</SatchComplete> 리스트
        </Satch>
        <Progreesing>진행 중</Progreesing>
        {/* 진행중 아이템 */}
        {progressingList.map((item) => (
          <ProgreesingItem>
            <CircleImg src={Circle} />
            <ProgreesingTitle>{item.name}</ProgreesingTitle>
            <Pointer onClick={progreesingHandler} src={pointerIcon} />
          </ProgreesingItem>
        ))}

        <div style={{ height: '10px', backgroundColor: '#F8F8FA' }}>{}</div>
        <Completed>달성</Completed>
        {/* 달성 아이템 */}
        {completeList.map((item) => (
          <CompletedItem>
            <CircleImg src={Circle} />
            <CompletedTitle>{item.name}</CompletedTitle>
            <Pointer onClick={completedHandler} src={pointerIcon} />
          </CompletedItem>
        ))}
      </Wrap>
      <Footer />
    </div>
  );
};

export default History;
