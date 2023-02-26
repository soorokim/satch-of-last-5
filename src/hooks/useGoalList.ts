import { useSetRecoilState, useRecoilCallback } from 'recoil';
import { v4 as uuidv4 } from 'uuid';
import { Goal, goalListState } from '../atoms/goalList';

const useGoalList = () => {
  const setGoalList = useSetRecoilState(goalListState);
  const createGoal = (newGoal: Omit<Goal, 'id' | 'createdAt'>) =>
    setGoalList((prev) => [...prev, { ...newGoal, id: uuidv4(), createdAt: new Date() }]);
  const updateGoal = (updateData: Goal) =>
    setGoalList((prev) => {
      const updateDataIndex = prev.findIndex((goalData) => goalData.id === updateData.id);
      const copyList = [...prev];

      copyList[updateDataIndex] = { ...prev[updateDataIndex], ...updateData };
      return copyList;
    });
  const readGoal = useRecoilCallback(({ snapshot }) => async (id: Goal['id']) => {
    const goalList = await snapshot.getPromise(goalListState);

    return goalList.find((goal) => goal.id === id);
  });

  return { createGoal, updateGoal, readGoal };
};

export default useGoalList;