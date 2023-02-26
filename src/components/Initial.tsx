import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import InitialIcon from '../assets/initial.svg';
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
const InitialImg = styled.img`
  width: 146px;
  height: 137px;
  position: relative;
  top: -20%;
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
    navigate('/setsatchitem');
  };

  return (
    <div>
      <Wrap>
        <InitialBox>
          <InitialImg src={InitialIcon} />
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
