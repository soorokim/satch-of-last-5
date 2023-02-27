import { Goal, Satch } from '../atoms/goalList';
import NotTodaySatchList from './NotTodaySatchList';
import TodaySatchList from './TodaySatchList';

interface SatchListProps {
  satchList: Satch[];
  currentGoal: Goal;
}

const SatchList = ({ satchList, currentGoal }: SatchListProps) => {
  const notTodaySatch = satchList.filter(
    (item) =>
      new Date(item.date).toISOString().slice(0, 10) !== new Date().toISOString().slice(0, 10),
  );
  const todaySatch = satchList.filter(
    (item) =>
      new Date(item.date).toISOString().slice(0, 10) === new Date().toISOString().slice(0, 10),
  );

  return (
    <div>
      <TodaySatchList satchList={todaySatch} currentGoal={currentGoal} />
      <NotTodaySatchList satchList={notTodaySatch} currentGoal={currentGoal} />
    </div>
  );
};

export default SatchList;
