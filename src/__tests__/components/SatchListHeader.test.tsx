import { render, screen } from '@testing-library/react';
import SatchListHeader from '../../components/SatchListHeader';

test('SatchListHeader가 랜더링된다.', async () => {
  render(<SatchListHeader title="오늘의 삿치" amount={0} />);
  const progressBar = await screen.findByText('오늘의 삿치');

  expect(progressBar).toBeInTheDocument();
});

test('SatchListHeader의 amount가 자릿수 구분되어 표시된다.', async () => {
  render(<SatchListHeader title="오늘의 삿치" amount={10000} />);
  const amount = screen.getByText((10000).toLocaleString());

  expect(amount).toBeInTheDocument();
});
