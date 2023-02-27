import { useState } from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import dayjs from 'dayjs';
import { Goal, Satch } from '../atoms/goalList';
import SatchItemDetail from '../pages/Main/SatchItemDetail';

const Wrapper = styled.div`
  margin-bottom: 40px;
`;

const Dim = styled.div`
  position: fixed;
  width: 335px;
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
  width: 335px;
  height: 64px;
  margin-top: 14px;
  background: #ffffff;
  border: 1px solid #ededed;
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
  width: 15px;
  margin-right: 15px;
`;
const ButtonIcon = styled.img`
  width: 7px;
  height: 14px;
`;

const TotalSatch = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 20px;
`;

const TotalPrice = styled.span`
  font-family: 'LINE Seed Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0.04em;
  color: #79bcf6;
  margin-right: 3px;
`;
const TodayTotalTitle = styled.span`
  font-family: 'LINE Seed Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.04em;
  color: #000000;
`;

const TotalPriceWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Basic = styled.span`
  font-family: 'LINE Seed Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.04em;
  color: #000000;
  margin-right: 5px;
`;

interface SatchListProps {
  satchList: Satch[];
  currentGoal: Goal;
}

const NotTodaySatchList = ({ satchList, currentGoal }: SatchListProps) => {
  const [target, setTarget] = useState<Satch | null>(null);
  const [open, setOpen] = useState(false);
  const handleTarget = (item: Satch) => {
    setTarget(item);
    setOpen(true);
  };
  const satchGroupByDate = _.groupBy(satchList, (satch: Satch) =>
    dayjs(satch.date).format('YYYY-MM-DD'),
  );

  return (
    <Wrapper>
      {Object.keys(satchGroupByDate).map((key) => (
        <div key={key}>
          <TotalSatch>
            <TodayTotalTitle>{key}</TodayTotalTitle>
            <TotalPriceWrapper>
              <Basic>총</Basic>
              <TotalPrice>
                {satchGroupByDate[key]
                  .reduce((acc, cur) => acc + cur.price, 0)
                  .toLocaleString('ko-KR')}
              </TotalPrice>
              <Basic>원</Basic>
            </TotalPriceWrapper>
          </TotalSatch>
          {satchGroupByDate[key].map((item) => (
            <ItemListWrapper key={item.id}>
              <Item>
                <Text>{item.name}</Text>
                <ButtonBeside>
                  <Price>{`+ ${item.price.toLocaleString('ko-KR')}원`}</Price>
                  <Button onClick={() => handleTarget(item)}>
                    <ButtonIcon src="/src/assets/button.png" />
                  </Button>
                </ButtonBeside>
              </Item>
            </ItemListWrapper>
          ))}
        </div>
      ))}
      {open && (
        <Dim
          onClick={() => {
            setOpen(false);
          }}
        />
      )}
      {open && (
        <SatchItemDetail selectedItem={target} currentGoal={currentGoal} setOpen={setOpen} />
      )}
    </Wrapper>
  );
};

export default NotTodaySatchList;
