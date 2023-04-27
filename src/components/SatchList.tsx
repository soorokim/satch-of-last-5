import dayjs from 'dayjs';
import styled from 'styled-components';
import { Goal, Satch } from '../atoms/goalList';
import NonStachList from './NonStachList';
import NotTodaySatchList from './NotTodaySatchList';
import TodaySatchList from './TodaySatchList';

interface SatchListProps {
  satchList: Satch[];
  currentGoal: Goal;
}

const NonSatchListWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

const SatchList = ({ satchList, currentGoal }: SatchListProps) => {
  const notTodaySatch = satchList.filter(
    (item) => dayjs(item.date).format('YYYY-MM-DD') !== dayjs().format('YYYY-MM-DD'),
  );
  const todaySatch = satchList.filter(
    (item) => dayjs(item.date).format('YYYY-MM-DD') === dayjs().format('YYYY-MM-DD'),
  );

  return (
    <div>
      {todaySatch.length === 0 ? (
        <NonSatchListWrapper>
          <NonStachList />
        </NonSatchListWrapper>
      ) : (
        <TodaySatchList satchList={todaySatch} currentGoal={currentGoal} />
      )}
      <NotTodaySatchList satchList={notTodaySatch} currentGoal={currentGoal} />
    </div>
  );
};

export default SatchList;
