import { screen } from '@testing-library/react';
import dayjs from 'dayjs';
import Main from '../../pages/Main/Main';
import renderWithGlobalState from '../utils/renderWithGlobalState';
import { goalState } from '../../atoms/goalList';
import { goalsService, satchsService } from '../../service';

test('Main 컴포넌트가 랜더링된다.', async () => {
  const SATCH_NAME = 'deleteTest';

  await goalsService.create({
    name: '파리 여행',
    price: 10000000,
  });

  const initialGoal = await goalsService.getCurrent();

  await satchsService.create({
    goalId: initialGoal.id,
    date: dayjs().toDate(),
    name: SATCH_NAME,
    price: 100000,
  });

  const goal = await goalsService.getCurrent();

  const initializeState = ({ set }: any) => {
    set(goalState, {
      ...goal,
    });
  };

  renderWithGlobalState(<Main />, { initialState: initializeState });

  await screen.findByText(/힘을 내요!/);
});

test('Main 컴포넌트 satchList가 없을때 입력해달라는 문구가 확인된다.', async () => {
  const initializeState = ({ set }: any) => {
    set(goalState, {
      id: 'test-id',
      emoticon: '',
      name: '파리 여행',
      price: 10000000,
      percent: 0,
      createdAt: new Date(),
      satchList: [],
    });
  };

  renderWithGlobalState(<Main />, { initialState: initializeState });

  await screen.findByText(/아직 내역이 없어요./);
});
