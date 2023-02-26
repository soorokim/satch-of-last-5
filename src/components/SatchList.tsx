import React, { useState } from 'react';
import styled from 'styled-components';
import { Goal, Satch } from '../atoms/goalList';
import SatchItemDetail from '../pages/Main/SatchItemDetail';

const Wrapper = styled.div``;

const Dim = styled.div`
  position: fixed;
  width: 375px;
  top: 0;
  bottom: 0;
  background-color: rgba(245, 245, 245, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 8;
`;
const ItemListWrapper = styled.div`
  margin-top: 10px;
`;
const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 375px;
  height: 64px;
  margin-top: 14px;
  background: #FFFFFF;
  border: 1px solid #EDEDED;
  border-radius: 16px;
`;
const Text = styled.div`
font-family: 'LINE Seed Sans KR';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
letter-spacing: 0.04em;
color: #000000;
  margin-left: 20px;
`;
const ButtonBeside = styled.div`
display: flex;
align-items: center;
`;
const Price = styled.div`
font-family: 'LINE Seed Sans KR';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;
letter-spacing: 0.04em;
color: #000000;
`;

const Button = styled.button`
  background-color: white;
  width:15px;
  margin-right: 15px;
`;
const ButtonIcon = styled.img`
  width: 7px;
  height: 14px;
`;


interface SatchListProps {
  satchList: Satch[];
  currentGoal: Goal;
}

const SatchList = ({ satchList, currentGoal }: SatchListProps) => {
  const [target, setTarget] = useState<Satch | null>(null);
  const [open, setOpen] = useState(false);
  const handleTarget = (item: Satch) => {
    setTarget(item);
    setOpen(true);
  };

  return (
    <Wrapper>
      {open && <Dim onClick={() => { setOpen(false); }} />}
      <ItemListWrapper>
        {satchList.map((item) => (
          <Item key={item.id}>
            <Text>{item.name}</Text>
            <ButtonBeside>
              <Price>{`+ ${item.price.toLocaleString('ko-KR')}원`}</Price>
              <Button onClick={() => handleTarget(item)}>
                <ButtonIcon src="/src/assets/button.png" />
              </Button>
            </ButtonBeside>
          </Item>
        ))}
      </ItemListWrapper>
      {open && <SatchItemDetail selectedItem={target} currentGoal={currentGoal} setOpen={setOpen} />}
    </Wrapper>)
    ;
};

export default SatchList;
