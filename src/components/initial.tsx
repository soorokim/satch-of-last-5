import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import IntialIcon from '../assets/initial.svg';

const Wrap = styled.div`
  margin: 0 auto;
  width: 375px;
  height: 812px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StartBtn = styled.button`
  width: 167.5px;
  height: 52px;
  border-radius: 100px;
  color: #ffffff;
  background-color: #aeadb2;
  outline: none;
  border: none;
  :focus {
    outline: none;
  }
`;
const IntialImg = styled.img`
  position: relative;
  top: 90px;
  right: 20%;
`;

const Initial = () => {
  const navigate = useNavigate();
  const StartClickHandler = () => {
    navigate('/');
  };
  return (
    <div>
      <IntialImg src={IntialIcon} />
      <Wrap>
        <StartBtn onClick={StartClickHandler}>시작하기</StartBtn>
      </Wrap>
    </div>
  );
};
export default Initial;
