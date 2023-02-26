import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 335px;
  height: 190px;
  background: #FFFFFF;
  border: 1px solid #EDEDED;
  border-radius: 16px;
`;
const Text = styled.div`
  font-family: 'LINE Seed Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #999999;
`;

const NonStachList = () => (
    <Wrapper>
        <div>
            <Text>아직 내역이 없어요.</Text>
            <Text>지금 바로 시작해 보세요!</Text>
        </div>
    </Wrapper>
);

export default NonStachList;
