import { atom, selector } from 'recoil';
import localStorageEffect from '../utils/localSotrageEffect';

export interface Satch {
  id: string; // 식별
  name: string; // 아메리카노, 신발,
  price: number; // 가격
  date: Date | string; // 언제 사치한 아이템이야?
}
export interface Goal {
  id: string; // 식별
  emoticon: string; // 이모티콘
  name: string; // 맥북 미국여행
  price: number; // 골의 목표 금액
  percent: number; // 달성률
  createdAt: Date | string; // 언제시작
  endedAt?: Date; // 언제 달성했어?
  satchList: Satch[]; // 이 골을 달성하기 위해서 어떤 아이템들을 갖고있어?
}

const GOAL_LIST_KEY = 'goalList';

const goalListState = atom({
  key: GOAL_LIST_KEY,
  default: [] as Goal[],
  effects: [localStorageEffect(GOAL_LIST_KEY)],
});

const CURRENT_GOAL_KEY = 'currentGoal';

const currentGoalState = selector({
  key: CURRENT_GOAL_KEY,
  get: ({ get }) => {
    const goalList = get(goalListState);

    return goalList.find((goal) => goal?.endedAt === undefined);
  },
});

export { goalListState, currentGoalState };
