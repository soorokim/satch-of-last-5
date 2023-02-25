import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 335px;
  height: 260px;
  background-color: #ffffff;
  box-shadow: 0px 2px 15px 5px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
`;
const Text = styled.div`
  font-family: 'LINE Seed Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #999999;
`;
const Button = styled.button`
  width: 123px;
  height: 39px;
  background-color: #dbdbdb;
  border-radius: 100px;
  margin-top: 25px;
`;

const NonStachList = () => (
  <Wrapper>
    <div>
      <Text>아직 내역이 없어요.</Text>
      <Text>지금 바로 시작해 보세요!</Text>
    </div>
    <Link to="/upload">
      <Button>등록하기</Button>
    </Link>
  </Wrapper>
);

export default NonStachList;
