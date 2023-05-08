import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import KakaoLoginButton from '../../components/KakaoLoginButton';

test('KakaoLoginButton 컴포넌트가 랜더링된다.', async () => {
  const sdk = { requestLogin: jest.fn() };

  render(<KakaoLoginButton sdk={sdk} />);

  const button = screen.getByText('카카오로 시작하기');

  expect(button).toBeInTheDocument();
});

test('KakaoLoginButton 컴포넌트를 클릭하면 sdk의 requestLogin이 실행된다.', async () => {
  const user = userEvent.setup();
  const sdk = { requestLogin: jest.fn() };

  render(<KakaoLoginButton sdk={sdk} />);

  const button = screen.getByText('카카오로 시작하기');

  await user.click(button);

  expect(sdk.requestLogin).toBeCalled();
});
