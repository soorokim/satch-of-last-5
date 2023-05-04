import { screen, waitFor } from '@testing-library/react';
import SetTargetForm from '../../components/SetTargetForm';
import renderWithRouter from '../utils/renderWithRouter';
import { goalsService } from '../../service';

test('SetTargetForm 컴포넌트가 랜더링된다.', async () => {
  renderWithRouter(<SetTargetForm />, { route: '/' });

  await screen.findAllByText('삿치 선서');
});

test('SetTargetForm 컴포넌트 목표명입력.', async () => {
  const { user } = renderWithRouter(<SetTargetForm />, { route: '/' });

  const targetNameInput = await screen.findByLabelText('목표명', { selector: 'input' });

  await user.type(targetNameInput, '유럽여행');

  expect(targetNameInput).toHaveValue('유럽여행');
});

test('SetTargetForm 컴포넌트 목표금액입력.', async () => {
  const { user } = renderWithRouter(<SetTargetForm />, { route: '/' });

  const amountInput = await screen.findByLabelText('금액', { selector: 'input' });

  await user.type(amountInput, '10000');

  expect(amountInput).toHaveValue('10,000');
});

test('SetTargetForm 컴포넌트 선서날짜 확인', async () => {
  renderWithRouter(<SetTargetForm />, { route: '/' });
  const todayString = new Date().toISOString().slice(0, 10).replaceAll('-', '.');

  screen.getByText(todayString);
});

test('SetTargetForm 컴포넌트 목표금액이 없을때 경고문구가 나타난다.', async () => {
  const { user } = renderWithRouter(<SetTargetForm />, { route: '/' });

  const submitButton = await screen.findByText(/등록하기/);

  await user.click(submitButton);

  await screen.findByText(/목표와 금액은 필수입니다!/);
});

test('SetTargetForm 컴포넌트 목표명과 금액을 입력하면 등록된다.', async () => {
  const createGoal = jest.spyOn(goalsService, 'create');
  const { user } = renderWithRouter(<SetTargetForm />, { route: '/setsatch' });
  const targetNameInput = await screen.findByLabelText('목표명', { selector: 'input' });
  const amountInput = await screen.findByLabelText('금액', { selector: 'input' });

  await user.type(targetNameInput, '유럽여행');
  await user.type(amountInput, '10000');
  const submitButton = await screen.findByText(/등록하기/);

  await user.click(submitButton);

  await waitFor(() => expect(createGoal).toBeCalledWith({ name: '유럽여행', price: 10000 }));
});

// 목표명 입력 잘되는지
// 금액 입력 잘되는지
// 금액에 숫자를 입력했을 때 입력되지 않음
// 오늘 날짜 나오는것 확인하기
