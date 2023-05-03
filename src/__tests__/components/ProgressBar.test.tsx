import { render, screen } from '@testing-library/react';
import ProgressBar from '../../components/ProgressBar';

test('ProgressBar가 랜더링된다.', async () => {
  render(<ProgressBar goalPrice={100} satchTotalPrice={15} />);
  const progressBar = await screen.findByTestId('progressBar');

  expect(progressBar).toBeInTheDocument();
});

test('ProgressBar progress의 올바른 수치가 표시된다.', async () => {
  render(<ProgressBar goalPrice={100} satchTotalPrice={15} />);
  const percent = await screen.findByTestId('percent');

  expect(percent.textContent).toEqual('15');
});

test('ProgressBar progress의 최대값은 100이다.', async () => {
  render(<ProgressBar goalPrice={100} satchTotalPrice={101} />);
  const percent = await screen.findByTestId('percent');

  expect(percent.textContent).toEqual('100');
});
