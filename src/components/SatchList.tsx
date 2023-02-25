import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const TotalSatch = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`;
const ItemListWrapper = styled.div`
  margin-top: 10px;
`;
const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4px;
`;
const Price = styled.div`
  width: 87px;
  text-align: start;
`;

const SatchList: React.FC<{
  totalPrice: number;
}> = ({ totalPrice }) => {
  const [satchList, setSatchList] = useState<
    { key: string; price: number; date: string; name: string }[]
  >([]);

  console.log('hi');
  useEffect(() => {
    fetch('http://localhost:5173/data/satch.json', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        setSatchList(data);
      });
  }, []);

  return (
    <div>
      <TotalSatch>
        <div>삿치 리스트</div>
        <div>{`총 ${totalPrice.toLocaleString('ko-KR')}원`}</div>
      </TotalSatch>
      <ItemListWrapper>
        {satchList.map((item) => (
          <Item key={item.key}>
            <div key={item.key}>{item.date}</div>
            <div>{item.name}</div>
            <div>
              <Price>{`+ ${item.price.toLocaleString('ko-KR')}`}</Price>
            </div>
          </Item>
        ))}
      </ItemListWrapper>
    </div>
  );
};

export default SatchList;
