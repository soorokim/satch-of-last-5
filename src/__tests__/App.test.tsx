import { waitFor, screen } from '@testing-library/react';
import dayjs from 'dayjs';
import App from '../App';
import renderWithGlobalState from './utils/renderWithGlobalState';
import { goalsService, satchsService } from '../service';
import { goalState } from '../atoms/goalList';

test('App이 랜더링된다.', async () => {
  renderWithGlobalState(<App />, { route: '/setgoals' });
  await waitFor(() =>
    expect(screen.getByTestId('location-display').textContent).toEqual('/setgoals'),
  );
});

test('satch를 추가 할 수 있다.', async () => {
  await goalsService.create({
    name: '파리 여행',
    price: 10000000,
  });
  const goal = await goalsService.getCurrent();
  const initializeState = ({ set }: any) => {
    set(goalState, {
      ...goal,
    });
  };

  const { user } = renderWithGlobalState(<App />, { initialState: initializeState });

  const plusButton = await screen.findByText(/\+/);

  await user.click(plusButton);

  await waitFor(() =>
    expect(screen.getByTestId('location-display').textContent).toEqual('/setsatchitem'),
  );

  await user.type(screen.getByLabelText('삿치 목표명', { selector: 'input' }), 'test satch');
  await user.type(screen.getByLabelText('금액', { selector: 'input' }), '100000');
  await user.click(screen.getByText('등록하기'));

  await waitFor(() => {
    expect(screen.getByTestId('location-display').textContent).toEqual('/');
  });

  screen.getByText(/test satch/);
  screen.getByText(/100,000원/);
});

test('satch를 삭제 할 수 있다.', async () => {
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

  const { user } = renderWithGlobalState(<App />, { initialState: initializeState });

  const plusButton = await screen.findAllByAltText(/detail/);

  const item = screen.getByText(/deleteTest/);

  await user.click(plusButton[0]);
  await user.click(await screen.findByText(/삭제/));

  expect(item).not.toBeInTheDocument();
});
