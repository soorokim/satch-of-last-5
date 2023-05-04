import { render } from '@testing-library/react';
import KakaoLoginButton from '../../components/KakaoLoginButton';

test('KakaoLoginButton 컴포넌트가 랜더링된다.', async () => {
  const sdk = { requestLogin: jest.fn() };

  render(<KakaoLoginButton sdk={sdk} />);
});
