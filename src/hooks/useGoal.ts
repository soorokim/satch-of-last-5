import { useSetRecoilState } from 'recoil';
import { v4 as uuidv4 } from 'uuid';
import { Goal, goalListState, Satch } from '../atoms/goalList';

const useGoal = (goalId: Goal['id']) => {
  const setGoalList = useSetRecoilState(goalListState);
  const createSatch = (satch: Omit<Satch, 'id'>) => {
    setGoalList((prev) => {
      const copyData = JSON.parse(JSON.stringify(prev)) as Goal[];
      const index = copyData.findIndex((goal) => goal.id === goalId);

      copyData[index] = {
        ...copyData[index],
        satchList: [...copyData[index].satchList, { ...satch, id: uuidv4() }],
      };

      return copyData;
    });
  };

  const updateSatch = (satchId: Satch['id']) => (satch: Partial<Omit<Satch, 'id'>>) => {
    setGoalList((prev) => {
      const copyData = JSON.parse(JSON.stringify(prev)) as Goal[];
      const index = copyData.findIndex((goal) => goal.id === goalId);
      const satchIndex = copyData[index].satchList.findIndex((data) => data.id === satchId);

      copyData[index].satchList[satchIndex] = {
        ...copyData[index].satchList[satchIndex],
        ...satch,
      };

      return copyData;
    });
  };

  const deleteSatch = (satchId: Satch['id']) => {
    setGoalList((prev) => {
      const copyData = JSON.parse(JSON.stringify(prev)) as Goal[];

      const index = copyData.findIndex((goal) => goal.id === goalId);

      const satchIndex = copyData[index].satchList.findIndex((data) => data.id === satchId);

      copyData[index].satchList.splice(satchIndex, 1);

      return copyData;
    });
  };

  return { createSatch, updateSatch, deleteSatch };
};

export default useGoal;
