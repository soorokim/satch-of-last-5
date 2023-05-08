import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import dayjs from 'dayjs';
import _ from 'lodash';
import ProgressBar from '../../components/ProgressBar';
import ToAchieve from '../../components/ToAchieve';
import Encourage from '../../components/Encourage';
import { goalsService, satchsService } from '../../service';
import { Goal, Satch, goalState } from '../../atoms/goalList';
import SatchItemDetail from './SatchItemDetail';
import { getTodayDateString } from '../../utils/dateUtil';
import SatchListHeader from '../../components/SatchListHeader';
import SatchListItem from '../../components/SatchListItem';
import NoSatchToday from '../../components/NoSatchItem';

const Wrapper = styled.div`
  margin-top: 40px;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Card = styled.div`
  width: 100%;
  width: 335px;
  height: 336px;
  background: #ffffff;
  border: 1px solid #ededed;
  border-radius: 16px;
`;

const SatchListWrapper = styled.div`
  /* display: flex; */
  justify-content: center;
  margin: 40px 0;
  /* position: relative; */
`;

const PlusButtonFixed = styled.div`
  position: sticky;
  float: right;
  padding: 0px 55px;
  z-index: 7;
`;

const PlusWrapper = styled.div`
  position: fixed;
  bottom: 68px;
  float: right;
  width: 50px;
  height: 50px;
  border-radius: 100px;
  z-index: 7;
`;

const PlusButton = styled.button`
  position: sticky;
  bottom: 0px;
  right: 0px;
  width: 50px;
  height: 50px;
  background: #79bcf6;
  border: 1px solid #79bcf6;
  border-radius: 100px;
  z-index: 0;
`;
const Plus = styled.div`
  position: absolute;
  left: 10px;
  top: -5px;
  font-size: 50px;
  z-index: 9999;
  font-weight: 250;
  color: white;
`;

const SatchItemWrapper = styled.div`
  margin-bottom: 30px;
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

interface SatchWithDate {
  date: string;
  items: Satch[];
  totalAmount: number;
}

const adapterSatchList = (
  satchList: Satch[],
): { satchListData: SatchWithDate[]; todaySatchData: SatchWithDate } => {
  const todayString = getTodayDateString();
  const satchListData = [] as SatchWithDate[];
  const todaySatchData = { date: todayString, items: [], totalAmount: 0 } as SatchWithDate;
  const groupBySatch = _.groupBy(satchList, (satch) => dayjs(satch.date).format('YYYY-MM-DD'));

  Object.keys(groupBySatch).forEach((date) => {
    if (todayString === date) {
      todaySatchData.items = groupBySatch[date];
      todaySatchData.totalAmount = groupBySatch[date].reduce((prev, curr) => prev + curr.price, 0);
    }

    satchListData.push({
      date,
      items: groupBySatch[date],
      totalAmount: groupBySatch[date].reduce((prev, curr) => prev + curr.price, 0),
    });
  });

  return { satchListData, todaySatchData };
};

const useSatchListData = (data: Satch[]) => {
  const { satchListData, todaySatchData } = adapterSatchList(data);

  return { satchListData, todaySatchData };
};

const Main = () => {
  const [goal, setGoal] = useRecoilState(goalState);
  const [target, setTarget] = useState<Satch | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const { satchListData, todaySatchData } = useSatchListData(goal.satchList);
  const navigate = useNavigate();

  useEffect(() => {
    const getGoal = async () => {
      const response = await goalsService.getCurrent();

      if (Object.keys(response).length === 0) {
        navigate('/setgoals');
      } else {
        setGoal({ ...response } as Goal);
      }
    };

    getGoal();
  }, []);

  if (Object.keys(goal).length === 0) return null;

  const satchTotalPrice = goal.satchList.reduce((acc: number, cur: Satch) => acc + cur.price, 0);

  const onClickItem = (item: Satch) => {
    setTarget(item);
    setIsOpen(true);
  };

  const onClickDim = () => {
    setIsOpen(false);
  };

  const onClickDelete = async () => {
    if (target) {
      await satchsService.delete({ goalId: goal.id, satchId: target.id });
      setIsOpen(false);
    }
  };

  const onClickModify = () => {
    navigate('/developing');
  };

  return (
    <>
      <Wrapper>
        <Card>
          <ToAchieve name={goal.name} price={goal.price} satchList={goal.satchList} />
          <Encourage />
          <ProgressBar satchTotalPrice={satchTotalPrice} goalPrice={goal.price} />
        </Card>
        <SatchListWrapper>
          <SatchItemWrapper>
            <SatchListHeader title="오늘의 삿치" amount={todaySatchData.totalAmount} />
            {todaySatchData.items.length ? (
              todaySatchData.items.map((item) => (
                <SatchListItem item={item} onClick={onClickItem} />
              ))
            ) : (
              <NoSatchToday />
            )}
          </SatchItemWrapper>
          {satchListData.map(({ date, items, totalAmount }) => (
            <SatchItemWrapper>
              <SatchListHeader title={date} amount={totalAmount} />
              {items.map((item) => (
                <SatchListItem item={item} onClick={onClickItem} />
              ))}
            </SatchItemWrapper>
          ))}
        </SatchListWrapper>
      </Wrapper>
      <PlusButtonFixed>
        <Link to="/setsatchitem">
          <PlusWrapper>
            <PlusButton>
              <Plus>+</Plus>
            </PlusButton>
          </PlusWrapper>
        </Link>
      </PlusButtonFixed>
      {isOpen && (
        <>
          <SatchItemDetail
            selectedItem={target}
            onClickDelete={onClickDelete}
            onClickModify={onClickModify}
          />
          <Dim onClick={onClickDim} />
        </>
      )}
    </>
  );
};

export default Main;
