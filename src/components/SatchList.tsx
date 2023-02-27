import dayjs from 'dayjs';
import { Goal, Satch } from '../atoms/goalList';
import NotTodaySatchList from './NotTodaySatchList';
import TodaySatchList from './TodaySatchList';

interface SatchListProps {
  satchList: Satch[];
  currentGoal: Goal;
}

const SatchList = ({ satchList, currentGoal }: SatchListProps) => {
  const notTodaySatch = satchList.filter(
    (item) => dayjs(item.date).format('YYYY-MM-DD') !== dayjs().format('YYYY-MM-DD'),
  );
  const todaySatch = satchList.filter(
    (item) => dayjs(item.date).format('YYYY-MM-DD') === dayjs().format('YYYY-MM-DD'),
  );

  return (
    <div>
      <TodaySatchList satchList={todaySatch} currentGoal={currentGoal} />
      <NotTodaySatchList satchList={notTodaySatch} currentGoal={currentGoal} />
    </div>
  );
};

export default SatchList;
