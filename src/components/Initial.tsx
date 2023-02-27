import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import InitialTem from '../assets/initialicon.svg';

const Wrap = styled.div`
  box-sizing: border-box;
  .buttonWrap {
    margin-top: 64px;
    padding: 0 20px;
  }
`;
// 아이콘 박스
const InitialBox = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  top: -10%;
`;

const StartBtn = styled.button`
  width: 100%;
  max-width: 375px;
  height: 52px;
  border-radius: 100px;
  color: #ffffff;
  background-color: #79bcf6;
  outline: none;
  border: none;
  font-family: 'LINE Seed Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  :focus {
    outline: none;
  }
`;
const InitialTitleBox = styled.div`
  width: 200px;
  height: 160px;
  margin: 72px 20px 0;
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
  margin-top: 32px;
  width: 100%;
  max-width: 375px;
`;

const Initial = () => {
  const navigate = useNavigate();
  const StartClickHandler = () => {
    navigate('/setgoals');
  };

  return (
    <Wrap>
      <InitialBox>
        <InitialTitleBox>
          <span>
            내 <span style={{ fontWeight: '700' }}>삿치</span>의
          </span>
          <span>
            <span style={{ fontWeight: '700' }}>목표</span>를
          </span>
          <span>정해주세요!</span>
        </InitialTitleBox>
      </InitialBox>
      <InitialEmo src={InitialTem} />

      <div className="buttonWrap">
        <StartBtn onClick={StartClickHandler}>시작하기</StartBtn>
      </div>
    </Wrap>
  );
};

export default Initial;
