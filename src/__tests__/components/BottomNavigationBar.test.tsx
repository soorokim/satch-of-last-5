import { screen } from '@testing-library/react';
import BottomNavigationBar from '../../components/BottomNavigationBar';
import renderWithRouter from '../utils/renderWithRouter';

test('hasAuth가 true면 BottomNavigationBar가 랜더링된다.', async () => {
  renderWithRouter(<BottomNavigationBar hasAuth />, { route: '/' });

  const home = screen.getByText('홈');
  const calendar = screen.getByText('달력');

  expect(home).toBeInTheDocument();
  expect(calendar).toBeInTheDocument();
});

test('hasAuth가 false면 BottomNavigationBar가 랜더링되지 않는다.', async () => {
  renderWithRouter(<BottomNavigationBar hasAuth={false} />, { route: '/' });

  expect(screen.queryByText('홈')).not.toBeInTheDocument();
  expect(screen.queryByText('달력')).not.toBeInTheDocument();
});
