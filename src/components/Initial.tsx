import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import InitialTem from '../assets/initialicon.svg';

const Wrap = styled.div`
  margin: 0 auto;
  width: 375px;
  height: 812px;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px soild black;
`;
// 아이콘 박스
const InitialBox = styled.div`
  display: flex;
  flex-direction: row;

  position: relative;
  top: -10%;
`;

const StartBtn = styled.button`
  width: 335px;
  height: 52px;
  border-radius: 100px;
  color: #ffffff;
  background-color: #79bcf6;
  outline: none;
  border: none;
  :focus {
    outline: none;
  }
`;
const InitialTitleBox = styled.div`
  width: 200px;
  height: 160px;
  position: relative;
  top: -20%;
  display: flex;
  flex-direction: column;
  font-family: 'LINE Seed Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 150%;
  border: 1px soild black;

  letter-spacing: 0.04em;

  color: #000000;
`;
const InitialEmo = styled.img`
  position: relative;
  top: -20%;
  width: 158.36px;
  height: 133.22px;
`;

const Initial = () => {
  const navigate = useNavigate();
  const StartClickHandler = () => {
    navigate('/setgoals');
  };

  return (
    <div>
      <Wrap>
        <InitialBox>
          <InitialTitleBox>
            <span style={{ marginLeft: '-10%' }}>
              내 <span style={{ fontWeight: '700' }}>삿치</span>의
            </span>
            <span>
              <span style={{ fontWeight: '700', marginLeft: '-35%' }}>목표</span>를
            </span>
            <span style={{ marginLeft: '0%' }}>정해주세요!</span>
          </InitialTitleBox>

          <InitialEmo src={InitialTem} />
        </InitialBox>

        <div>
          <StartBtn onClick={StartClickHandler}>시작하기</StartBtn>
        </div>
      </Wrap>
    </div>
  );
};

export default Initial;
