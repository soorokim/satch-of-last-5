import styled from 'styled-components';
import { Satch } from '../atoms/goalList';

const Wrapper = styled.div``;

const ItemListWrapper = styled.div`
  margin-top: 10px;
`;
const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 335px;
  height: 64px;
  margin-top: 14px;
  border-radius: 8px;
  box-shadow: 0px 2px 10px 3px rgba(0, 0, 0, 0.03);
  border-radius: 8px;
`;
const Text = styled.div`
  font-family: 'LINE Seed Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #000000;
  margin-left: 15px;
`;

const Price = styled.div`
  margin-right: 15px;
  font-family: 'LINE Seed Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.04em;
  color: #000000;
`;

const SatchList: React.FC<{ satchList: Satch[] }> = ({ satchList }) => {
  console.log(satchList)
  return (
    <Wrapper>
      <ItemListWrapper>
        {/* {satchList?.map((item) => (
          <Item key={item.id}>
            <Text>{item.name}</Text>
            <Price>{`+ ${item.price.toLocaleString('ko-KR')}원`}</Price>
          </Item>
        ))} */}
      </ItemListWrapper>
    </Wrapper>
  );
};

export default SatchList;
