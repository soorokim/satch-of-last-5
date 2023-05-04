import { render, screen } from '@testing-library/react';
import TextUnderline from '../../components/TextUnderline';

test('TextUnderline 컴포넌트가 랜더링된다.', async () => {
  render(<TextUnderline>테스트텍스트</TextUnderline>);
  const textUnderline = await screen.findByTestId('textUnderline');

  expect(textUnderline).toBeInTheDocument();
});

test('TextUnderline 컴포넌트의 fontSize가 적용된다.', async () => {
  render(<TextUnderline fontSize={16}>테스트입니다.</TextUnderline>);
  const textUnderline = await screen.findByText('테스트입니다.');

  expect(textUnderline).toHaveStyle('font-size: 16px;');
});

test('TextUnderline 컴포넌트의 fontWeight가 적용된다.', async () => {
  render(<TextUnderline fontWeight="bold">테스트입니다.</TextUnderline>);
  const textUnderline = await screen.findByText('테스트입니다.');

  expect(textUnderline).toHaveStyle('font-weight: bold;');
});
